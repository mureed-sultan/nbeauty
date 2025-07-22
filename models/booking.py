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
    branch_id = fields.Many2one('stock.warehouse', string="Branch")  # ✅ Add this
