from odoo import http
from odoo.http import request
import pytz
from datetime import datetime


class NBeautyHomepage(http.Controller):

    @http.route('/', auth='public', website=True)
    def homepage(self, **kw):
        branches = request.env['stock.warehouse'].sudo().search([])
        return request.render('nbeauty.nbeauty_homepage', {
            'branches': branches
        })

    @http.route('/aboutus', auth="public", website="true")
    def aboutpage(self):
        return request.render('nbeauty.nbeauty_aboutpage')

    @http.route(['/branches'], type='http', auth='public', website=True)
    def show_branches(self, city_id=None, **kwargs):
        cities = request.env['website.branch.city'].sudo().search([], order='sequence, name')
        domain = [('city_id', '=', int(city_id))] if city_id else []
        branches = request.env['website.branch'].sudo().search(domain, order='sequence, name')
        return request.render('nbeauty.template_branch_listing', {
            'cities': cities,
            'branches': branches,
            'selected_city': int(city_id) if city_id else None
        })

    @http.route('/services', auth="public", website=True)
    def services_page(self):
        return request.render('nbeauty.nbeauty_services_template')

    @http.route('/location', auth="public", website="true")
    def location_page(self):
        return request.render('nbeauty.nbeauty-location')

    @http.route('/location2', auth='public', website=True)
    def branch_locator(self, **kwargs):
        branches = request.env['website.branch'].sudo().search([], order='sequence, name')
        return request.render('nbeauty.website_branch_locator', {
            'branches': branches
        })

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
            time_str = post.get('booking_time')

            hours, minutes = map(int, time_str.split(':'))
            time_float = hours + minutes / 60.0

            branch_id = int(post.get('branch_id'))

            request.env['nbeauty.booking'].sudo().create({
                'customer_name': name,
                'customer_mobile': mobile,
                'service_ids': [(6, 0, service_ids)],
                'employee_id': employee_id,
                'booking_date': date,
                'booking_time': time_float,  # ✅ Use float
                'branch_id': branch_id,
            })

            return request.redirect('/nbeauty/booking/thanks')

        except Exception as e:
            return request.render('nbeauty.website_booking_error', {'error': str(e)})

    @http.route('/nbeauty/booking/thanks', type='http', auth='public', website=True)
    def booking_thanks(self, **kwargs):
        return request.render('nbeauty.website_booking_thank_you')
