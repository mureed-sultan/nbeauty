from odoo import models, api, _
from odoo.exceptions import ValidationError
import re

class ResPartner(models.Model):
    _inherit = 'res.partner'

    @api.model
    def create(self, vals):
        name = vals.get('name')
        phone = vals.get('phone')
        mobile = vals.get('mobile')

        if name and self._name_exists(name):
            raise ValidationError(_("A contact with this name already exists (case-insensitive match)."))

        if phone and self._phone_exists(phone):
            raise ValidationError(_("A contact with this phone number already exists (normalized match)."))

        if mobile and self._phone_exists(mobile):
            raise ValidationError(_("A contact with this mobile number already exists (normalized match)."))

        return super().create(vals)

    def write(self, vals):
        name = vals.get('name')
        phone = vals.get('phone')
        mobile = vals.get('mobile')

        for record in self:
            # Name check
            if name:
                if record.name and record.name.strip().lower() != name.strip().lower():
                    if self._name_exists(name, exclude_id=record.id):
                        raise ValidationError(_("A contact with this name already exists (case-insensitive match)."))

            # Phone check
            if phone:
                normalized_old = self._normalize_phone(record.phone or '')
                normalized_new = self._normalize_phone(phone)
                if normalized_old != normalized_new:
                    if self._phone_exists(phone, exclude_id=record.id):
                        raise ValidationError(_("A contact with this phone number already exists (normalized match)."))

            # Mobile check
            if mobile:
                normalized_old = self._normalize_phone(record.mobile or '')
                normalized_new = self._normalize_phone(mobile)
                if normalized_old != normalized_new:
                    if self._phone_exists(mobile, exclude_id=record.id):
                        raise ValidationError(_("A contact with this mobile number already exists (normalized match)."))

        return super().write(vals)

    def _name_exists(self, name, exclude_id=None):
        name_clean = name.strip().lower()
        domain = [('name', 'ilike', name)]
        if exclude_id:
            domain.append(('id', '!=', exclude_id))
        return self.env['res.partner'].search_count(domain) > 0

    def _phone_exists(self, number, exclude_id=None):
        normalized = self._normalize_phone(number)
        domain = []
        if exclude_id:
            domain.append(('id', '!=', exclude_id))
        partners = self.env['res.partner'].search(domain)
        for partner in partners:
            for field in ['phone', 'mobile']:
                value = getattr(partner, field)
                if value and self._normalize_phone(value) == normalized:
                    return True
        return False

    def _normalize_phone(self, phone):
        if not phone:
            return ''
        return re.sub(r'[^\d+]', '', phone).strip().lower()
# models/booking.py

from odoo import models, fields

class NBeautyBooking(models.Model):
    _name = 'nbeauty.booking'
    _description = 'Customer Booking'

    customer_name = fields.Char(required=True)
    customer_mobile = fields.Char(required=True)
    service_ids = fields.Many2many('product.product', string="Services")
    employee_id = fields.Many2one('hr.employee', string="Provider")
    booking_date = fields.Date(string="Date", required=True)
    booking_time = fields.Float(string="Time", required=True)  # Stored in float format (e.g., 13.5 for 1:30 PM)
