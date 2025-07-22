from odoo import http
from odoo.http import request
import pytz
from datetime import datetime


class NBeautyHomepage(http.Controller):

    @http.route('/', auth='public', website=True)
    def homepage(self, **kw):
        branches = request.env['stock.warehouse'].sudo().search([])
        return request.render('nbeauty.nbeauty_homepage',{
            'branches':branches
        })

    @http.route('/aboutus', auth="public", website="true")
    def aboutpage(self):
        return  request.render('nbeauty.nbeauty_aboutpage')
    
    @http.route('/services', auth="public", website="true")
    def services_page(self):
        return  request.render('nbeauty.nbeauty-services')


    @http.route('/pricelist', auth="public", website="true")
    def pricelist_page(self):
        return  request.render('nbeauty.nbeauty-pricelist')

    @http.route('/services/<slug>', type='http', auth='public', website=True)
    def service_detail(self, slug, **kwargs):
        service = request.env['website.service'].sudo().search([('slug', '=', slug)], limit=1)
        services = request.env['product.product'].sudo().search([('available_in_pos', '=', True)])
        employees = request.env['hr.employee'].sudo().search([])
        branches = request.env['stock.warehouse'].sudo().search([])

        # Dubai timezone minimum date logic
        Dubai = pytz.timezone('Asia/Dubai')
        today_date = datetime.now(Dubai).strftime('%Y-%m-%d')

        if not service:
            return request.not_found()

        return request.render('nbeauty.service_page_template', {
            'service': service,
            'services': services,
            'employees': employees,
            'branches': branches,
            'today': today_date,
        })

    # Booking section
    @http.route('/nbeauty/booking', type='http', auth='public', website=True)
    def booking_page(self, **kwargs):
        services = request.env['product.product'].sudo().search([('available_in_pos', '=', True)])
        employees = request.env['hr.employee'].sudo().search([])
        branches = request.env['stock.warehouse'].sudo().search([])
        return request.render('nbeauty.website_booking_form', {
            'services': services,
            'employees': employees,
            'branches': branches,
        })

    @http.route('/nbeauty/booking/submit', type='http', auth='public', website=True, csrf=True)
    def submit_booking(self, **post):
        try:
            name = post.get('customer_name')
            mobile = post.get('customer_mobile')
            service_ids = [int(s) for s in request.httprequest.form.getlist('service_ids')]
            employee_id = int(post.get('employee_id'))
            date = post.get('booking_date')
            time = post.get('booking_time')
            branch_id = int(post.get('branch_id'))  # ✅ Get this

            request.env['nbeauty.booking'].sudo().create({
                'customer_name': name,
                'customer_mobile': mobile,
                'service_ids': [(6, 0, service_ids)],
                'employee_id': employee_id,
                'booking_date': date,
                'booking_time': time,
                'branch_id': branch_id,  # ✅ Save it

            })

            return request.redirect('/nbeauty/booking/thanks')

        except Exception as e:
            return request.render('website.404', {'error': str(e)})

    @http.route('/nbeauty/booking/thanks', type='http', auth='public', website=True)
    def booking_thanks(self, **kwargs):
        return request.render('nbeauty.website_booking_thank_you')