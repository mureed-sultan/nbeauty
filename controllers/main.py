from odoo import http
from odoo.http import request
import pytz
from datetime import datetime
import json



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
        cities = request.env['website.branch.city'].sudo().search([], order='sequence, name')
        branches = request.env['website.branch'].sudo().search([], order='sequence, name')

        # Build nested JSON: cities -> branches
        data = []
        for city in cities:
            city_branches = []
            for branch in branches.filtered(lambda b: b.city_id.id == city.id):
                city_branches.append({
                    'id': branch.id,
                    'name': branch.name,
                    'lat': branch.latitude or 0,
                    'lng': branch.longitude or 0,
                    'phone': branch.phone or '',
                    'address': branch.address or '',
                })
            data.append({
                'city_id': city.id,
                'city_name': city.name,
                'branches': city_branches
            })

        return request.render('nbeauty.website_branch_locator', {
            'city_branch_json': json.dumps(data),  # ✅ send single JSON
        })

    @http.route('/booking/<slug>', type='http', auth='public', website=True)
    def booking_service_page(self, slug, **kwargs):
        employees = request.env['hr.employee'].sudo().search([])
        branches = request.env['stock.warehouse'].sudo().search([])

        Dubai = pytz.timezone('Asia/Dubai')
        today_date = datetime.now(Dubai).strftime('%Y-%m-%d')

        # Pass the slug to the template for booking.js
        return request.render('nbeauty.website_booking_form', {
            'slug': slug,
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


    @http.route('/nbeauty/booking/submit', type='http', auth='public', methods=['POST'], csrf=False, website=True)
    def submit_booking(self, **post):
        try:
            services_data = post.getlist('services')  # ✅ multiple services from form
            services_json = json.dumps(services_data) # ✅ Convert to JSON

            request.env['nbeauty.booking'].sudo().create({
                'customer_name': post.get('customer_name'),
                'customer_mobile': post.get('customer_mobile'),
                'branch_id': int(post.get('branch_id')) if post.get('branch_id') else False,
                'employee_id': int(post.get('employee_id')) if post.get('employee_id') else False,
                'booking_date': post.get('booking_date'),
                'booking_time': float(post.get('booking_time')),
                'services': services_json,   # ✅ Save as JSON text
            })

            return request.redirect('/thank-you')

        except Exception as e:
            return f"🚫 Booking Failed<br>{str(e)}"

    @http.route('/nbeauty/popup/submit', type='http', auth='public', methods=['POST'], csrf=False)
    def submit_popup_form(self, **kwargs):
        # ✅ Read raw POST data
        raw_data = request.httprequest.data.decode('utf-8')
        try:
            data = json.loads(raw_data)
        except:
            data = {}

        # ✅ Extract only required fields
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        requirements = data.get('requirements') or ''

        # ✅ Validate required fields
        if not name or not email or not phone:
            return request.make_json_response({
                'status': 'error',
                'message': 'Name, Email, and Phone are required.'
            })

        # ✅ Save to DB
        request.env['nbeauty.popup.lead'].sudo().create({
            'name': name,
            'email': email,
            'phone': phone,
            'requirements': requirements,
        })

        return request.make_json_response({
            'status': 'success',
            'message': 'Lead saved successfully'
        })

    @http.route('/ncard', type='http', auth='public', website=True)
    def ncard_page(self, **kwargs):
        return request.render('nbeauty.website_ncard')

    @http.route('/nbeauty/booking/thanks', type='http', auth='public', website=True)
    def booking_thanks(self, **kwargs):
        return request.render('nbeauty.website_booking_thank_you')
