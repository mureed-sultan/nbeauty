from odoo import models, fields

class WebsiteService(models.Model):
    _name = 'website.service'
    _description = 'Website Service'
    _order = 'sequence, name'

    name = fields.Char(required=True)
    slug = fields.Char(required=True, help="URL-friendly slug")
    description_short = fields.Char()
    description_long = fields.Text()
    price = fields.Char()
    image = fields.Image(max_width=1024, max_height=1024)
    meta_title = fields.Char()
    meta_description = fields.Char()
    meta_keywords = fields.Char()
    sequence = fields.Integer(default=10)
