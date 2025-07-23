from odoo import models, fields

class WebsiteServiceCategory(models.Model):
    _name = 'website.service.category'
    _description = 'Website Service Category'
    _order = 'name'

    name = fields.Char(required=True)
    sequence = fields.Integer(default=10)
