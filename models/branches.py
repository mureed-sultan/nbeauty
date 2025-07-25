from odoo import models, fields


class WebsiteBranchCity(models.Model):
    _name = 'website.branch.city'
    _description = 'Branch City'
    _order = 'sequence, name'

    name = fields.Char(string='City Name', required=True)
    sequence = fields.Integer(default=10)


class WebsiteBranch(models.Model):
    _name = 'website.branch'
    _description = 'Website Branch'
    _order = 'sequence, name'

    name = fields.Char(required=True)
    city_id = fields.Many2one('website.branch.city', string="City", required=True)
    phone = fields.Char(string="Phone Number")
    whatsapp = fields.Char(string="WhatsApp")
    address = fields.Char()
    map_url = fields.Char(string="Google Map URL")
    image = fields.Image(max_width=1024, max_height=1024)
    sequence = fields.Integer(default=10)
    latitude = fields.Float(string="Latitude", digits=(10, 6))
    longitude = fields.Float(string="Longitude", digits=(10, 6))
