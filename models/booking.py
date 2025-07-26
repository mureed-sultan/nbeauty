from odoo import models, fields
import json

class NBeautyBooking(models.Model):
    _name = 'nbeauty.booking'
    _description = 'Customer Booking'

    customer_name = fields.Char(required=True)
    customer_mobile = fields.Char(required=True)

    # ✅ Changed: Store multiple services as JSON text
    services_json = fields.Text(string="Selected Services")

    employee_id = fields.Many2one('hr.employee', string="Provider")
    booking_date = fields.Date(string="Date", required=True)
    booking_time = fields.Float(string="Time", required=True)
    branch_id = fields.Many2one('stock.warehouse', string="Branch")

    def get_services_list(self):
        """Helper to get Python list from JSON"""
        try:
            return json.loads(self.services_json or "[]")
        except:
            return []
