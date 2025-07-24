# -*- coding: utf-8 -*-
{
    'name': "N beauty Theme",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """Long description of module's purpose""",

    'author': "iStallena Solutions",
    'website': "https://www.istallena.com",

    'category': 'theme',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website','contacts'],
    'assets': {
        'website.assets_frontend': [
            'nbeauty/static/src/css/main.css',
            'nbeauty/static/src/js/fullscreen_menu.js',
        ],
    },
    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/templates.xml',
        'views/homepage.xml',
        'views/aboutpage.xml',
        'views/servicespage.xml',
        'views/pricelist.xml',
        'views/booking_views.xml',
        'views/service_views.xml',
        'views/serviceDetailPage.xml',
        'views/order_view.xml',
        'views/branch_page.xml',
        'views/branch_view.xml',
        'views/nbeauty_booking_backend_views.xml',
        'views/website_menu.xml',
        # 'data/menus.xml',
    ],
    'demo': [],
    'application': True,

}
