from odoo import models, fields, api
import json

class NBeautyBooking(models.Model):
    _name = 'nbeauty.booking'
    _description = 'NBeauty Bookings'

    customer_name = fields.Char(string="Customer Name")
    customer_mobile = fields.Char(string="Customer Mobile")

    # Store as Text so we can save JSON or comma-separated
    selected_services = fields.Text(string="Selected Services")

    provider_id = fields.Many2one('res.users', string="Provider")
    date = fields.Date(string="Date")
    time = fields.Char(string="Time")
    branch_id = fields.Many2one('res.branch', string="Branch")  # adjust to your branch model

    @api.model
    def create(self, vals):
        if isinstance(vals.get('selected_services'), list):
            # Convert list to JSON string
            vals['selected_services'] = json.dumps(vals['selected_services'])
        return super(NBeautyBooking, self).create(vals)

    def write(self, vals):
        if isinstance(vals.get('selected_services'), list):
            vals['selected_services'] = json.dumps(vals['selected_services'])
        return super(NBeautyBooking, self).write(vals)

    def get_selected_services_display(self):
        """Helper for displaying services nicely"""
        try:
            services = json.loads(self.selected_services or "[]")
            return ", ".join([s.get("name") for s in services if s.get("name")])
        except Exception:
            return self.selected_services or ""
