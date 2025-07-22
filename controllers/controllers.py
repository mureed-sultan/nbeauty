# from odoo import http


# class Nbeauty(http.Controller):
#     @http.route('/nbeauty/nbeauty', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/nbeauty/nbeauty/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('nbeauty.listing', {
#             'root': '/nbeauty/nbeauty',
#             'objects': http.request.env['nbeauty.nbeauty'].search([]),
#         })

#     @http.route('/nbeauty/nbeauty/objects/<model("nbeauty.nbeauty"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('nbeauty.object', {
#             'object': obj
#         })

