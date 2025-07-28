from odoo import models, fields

class NBeautyPopupLead(models.Model):
    _name = 'nbeauty.popup.lead'
    _description = 'NBeauty Popup Leads'
    _order = 'create_date desc'

    name = fields.Char("Name", required=True)
    email = fields.Char("Email", required=True)
    phone = fields.Char("Phone")
    requirements = fields.Text("Requirements")
