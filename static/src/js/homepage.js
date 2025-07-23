const branchData = {
    "Dubai": {
        address: "Al Barsha Mall – 1st Floor, Dubai",
        map: "https://maps.app.goo.gl/52iKfezbgSPFpawu9",
        phone: "+97143255948",
        whatsapp: "+97143255948"
    },
    "Abu Dhabi - Mushrif Mall": {
        address: "Mushrif Mall, Abu Dhabi",
        map: "#",
        phone: "+97124499783",
        whatsapp: "+97124499783"
    },
    "Abu Dhabi - Makani Al Shamkha": {
        address: "Makani Al Shamkha Mall, Abu Dhabi",
        map: "#",
        phone: "+97125848711",
        whatsapp: "+97125848711"
    },
    "Abu Dhabi - Bawabat Al Sharq": {
        address: "Bawabat Al Sharq Mall, Abu Dhabi",
        map: "#",
        phone: "+97125864027",
        whatsapp: "+97125864027"
    },
    "Abu Dhabi - Dalma Mall": {
        address: "Dalma Mall, Abu Dhabi",
        map: "#",
        phone: "+97124436720",
        whatsapp: "+97124436720"
    },
    "Ras Al Khaimah - Al Naeem City Center": {
        address: "Al Naeem City Center, Ras Al Khaimah",
        map: "#",
        phone: "+97172359145",
        whatsapp: "+97172359145"
    },
    "Ras Al Khaimah - Al Naeem Mall": {
        address: "Al Naeem Mall, Ras Al Khaimah",
        map: "#",
        phone: "+97172267540",
        whatsapp: "+97172267540"
    },
    "Ras Al Khaimah - My City Centre Al Dhait": {
        address: "My City Centre Al Dhait, Ras Al Khaimah",
        map: "#",
        phone: "+97172214172",
        whatsapp: "+97172214172"
    },
    "Ras Al Khaimah - Manar Mall": {
        address: "Manar Mall, Ras Al Khaimah",
        map: "#",
        phone: "+971542722555",
        whatsapp: "+971542722555"
    },
    "Ajman - City Life Al Jurf": {
        address: "City Life, Al Jurf, Ajman",
        map: "#",
        phone: "+97167317772",
        whatsapp: "+97167317772"
    },
    "Ajman - Radisson Blu Toombal": {
        address: "Radisson Blu Hotel, Ajman",
        map: "#",
        phone: "+971586403251",
        whatsapp: "+971586403251"
    },
    "Fujairah - Lulu Mall": {
        address: "Lulu Mall, Fujairah",
        map: "#",
        phone: "+97192237635",
        whatsapp: "+97192237635"
    }
};

function updateLocation(value) {
    const data = branchData[value];
    if (!data) return;
    document.getElementById('map-link').href = data.map;
    document.getElementById('map-link').textContent = data.address;
    document.getElementById('call-btn').href = 'tel:' + data.phone;
    document.getElementById('whatsapp-btn').href = 'https://wa.me/' + data.whatsapp;

    document.getElementById('location-point').classList.remove('hide');
    document.getElementById('location-btns').classList.remove('hide');
}

// Set default on page load
updateLocation('Dubai');

const selector = document.getElementById('city-selector');
selector.addEventListener('change', (event) => {
    const value = event.target.value;
    updateLocation(value);
});


// First, get both the popup and the close button
const appointmentPopup = document.querySelector('.appointment-pop-up-div');
const closeButton = document.getElementById('closebtnpopup');

// Add click event listener on the close button
closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    appointmentPopup[0].style.display = 'none';
});












const serviceCategories = [
    {
        id:"1",
        title: "Hair Care",
        titleArabic: "العناية بالشعر",
        description: "Expert hands, extraordinary transformation.Your journey to beautiful hair begins here.",
        children: [
            {
                title: "Cut & Blow Dry",
                titleArabic: "قص وتصفيف",
                description:"Snip into a fresh new you, where every cut is a cut above the rest!",
                services: [
                    { name: "Hair Wash", arabic: "غسيل الشعر", price: "50 AED" },
                    { name: "Trim", arabic: "قص أطراف الشعر", price: "80 AED" },
                    { name: "Fringe Haircut", arabic: "قص الغرة", price: "50 AED" },
                    { name: "Haircut", arabic: "قص الشعر", price: "150 AED" },
                    { name: "Hair Cut and Blow Dry", arabic: "قص الشعر مع سيشوار", price: "190 AED" },
                    { name: "Little Princess Cut", arabic: "قصة الأميرة الصغيرة", price: "70 AED" }
                ]
            },
            {
                title: "Blow Dry",
                titleArabic: "سيشوار",
                description:"Turn up the volume, experience blowouts that bring your hair to life!",
                services: [
                    { name: "Fringe Blow Dry", arabic: "سيشوار الغرة", price: "35 AED" },
                    { name: "Hair Blow Dry", arabic: "سيشوار الشعر", price: "80 - 200 AED" }
                ]
            },
            {
            title:"Full Ammonia Free Color",
            titleArabic:"صبغة كاملة (خالية من امونيا)",
            description:"Color your world gently, vibrant hues, zero compromise, all care!",
             services: [
                { name: "Roots", arabic: "الجذور", price: "220 AED" },
                { name: "Full Color INOA", arabic: "صبغ الشعر بالكامل (إينوا)", price: "110 AED" },
             ]
            },      {
            title:"Full Color ",
            titleArabic:"صبغة كاملة",
            description:"Unleash your boldness, full color, full confidence, full you!",
            services: [
                { name: "Roots Front", arabic: "الجذور الأمامية", price: "160 - 220 AED" },
                { name: "Roots", arabic: "الجذور", price: "160 AED" },
                { name: "Full Hair Color", arabic: "صبغة شعر كاملة", price: "280 - 880 AED" },
                ]
            },
            {
                title: "Color Rinse",
                titleArabic: "رينساج",
                description:"Refresh your shade, rinse away the ordinary, reveal the extraordinary!",
                services: [
                    { name: "Hair Color Rinse", arabic: "رينساج الشعر", price: "370 AED" }
                ]
            },
            {
                title: "Highlights",
                titleArabic: "هايلايت",
                description:"Shine bright, let your highlights steal the spotlight!",
                services: [
                    { name: "Half Head", arabic: "نصف الرأس", price: "420 - 870 AED" },
                    { name: "Short Hair", arabic: "شعر قصير", price: "200 - 450 AED" }
                ]
            },
            {
                title: "Decolorization",
                description:"Go lighter, go brighter, embrace a new canvas for your next look!",
                titleArabic: "سحب اللون",
                services: [
                    { name: "Hair Decolorization", arabic: "سحب لون الشعر", price: "250 AED" }
                ]
            },
            {
                title: "Hair Style",
                titleArabic: "تصفيف الشعر",
                description:"Style it your way, where every strand tells your story!",
                services: [
                    { name: "Hair Style A", arabic: "تصفيف أ", price: "350 AED" },
                    { name: "Hair Style B", arabic: "تصفيف ب", price: "450 AED" },
                    { name: "Hair Style C", arabic: "تصفيف ج", price: "550 AED" }
                ]
            },
            {
                title: "Hair Extension",
                titleArabic: "وصلات الشعر",
                description:"Longer, fuller, fabulous, let your hair dreams grow with us!",
                services: [
                    { name: "Place Hair Extension (Per Piece)", arabic: "تركيب وصلة شعر", price: "25 AED" },
                    { name: "Remove Hair Extension only", arabic: "إزالة وصلة الشعر", price: "15 AED" },
                    { name: "Replace Hair Extension (Per Piece)", arabic: "استبدال وصلة شعر", price: "30 AED" }
                ]
            },      {
                title: "BB CRÈME ",
                titleArabic: "وصلات الشعر",
                description:"",
                services: [
                    { name: "BB Creme Application", arabic: "تركيب وصلة شعر", price: "25 AED" },
                ]
            },  {
                title: "Botox ",
                titleArabic: "بوتوكس",
                description:"",
                services: [
                    { name: "Hair Botox", arabic: "تركيب وصلة شعر", price: "25 AED" },
                ]
            }, {
                title: "Kerastase ",
                titleArabic: "کیراستاس",
                description:"",
                services: [
                    { name: "Kerastase Hair Ritual", arabic: "عج الشعر من كاستاس", price: "25 AED" },
                ]
            }, {
                title: "L'oreal ",
                titleArabic: "کیراستاس",
                description:"",
                services: [
                    { name: "L'oreal HairTreatment", arabic: "عج الشعر من لوريال", price: "25 AED" },
                ]
            },{
                title: "Olaplex ",
                titleArabic: "أو¥بليكس",
                description:"",
                services: [
                    { name: "Olaplex HairTreatment", arabic: "عج أو¥بليكس للشعر", price: "25 AED" },
                ]
            },{
                title: "Collagen ",
                titleArabic: "العج",
                description:"",
                services: [
                    { name: "Treatment A , B , C , D", arabic: "عج أو¥بليكس للشعر", price: "25 AED" },
                ]
            },{
                title: "Protein ",
                titleArabic: "العج",
                description:"",
                services: [
                    { name: "Protein HairTreatment", arabic: "عج أو¥بليكس للشعر", price: "25 AED" },
                ]
            },
            {
                title: "Keratin",
                titleArabic: "علاج الشعر",
                services: [
                    { name: "Kids ", arabic: "علاج ", price: "250 - 500 AED" },
                    { name: "Roots Front", arabic: "علاج لوريال", price: "150 - 450 AED" },
                    { name: "Olaplex Hair Treatment", arabic: "علاج أولابليكس", price: "250 - 350 AED" },
                    { name: "Nashi Argan Treatment A, B, C, D", arabic: "علاج ناشي أ, ب, ج, د", price: "160 - 310 AED" },
                    { name: "Collagen Treatment A, B, C, D", arabic: "علاج الكولاجين أ, ب, ج, د", price: "160 - 310 AED" },
                    { name: "Protein Hair Treatment", arabic: "علاج البروتين", price: "1200 - 2500 AED" },
                    { name: "Keratin Hair Treatment", arabic: "علاج الكيراتين", price: "1200 - 2500 AED" }
                ]
            }
        ]
    },
    {
            id:"2",
        title: "Make-Up & Tinting",
        titleArabic: "مكياج و صبغة",
        description:"From subtle glam to all-out wow, flawless makeup, defined brows, and lashes that speak volumes.",
        services: [
            { name: "Bridal Make-up", arabic: "مكياج العرائس", price: "From 1000 AED" },
            { name: "Eyes Only", arabic: "للعيون فقط", price: "From 300 AED" },
            { name: "Day", arabic: "نهاري", price: "From 400 AED" },
            { name: "Evening", arabic: "سهرة", price: "From 600 AED" },
            { name: "Tinting Eyebrows", arabic: "صبغة الحواجب", price: "50 AED" },
            { name: "Tinting Eyelashes", arabic: "صبغة الرموش", price: "70 AED" }
        ]
    },
    {
            id:"3",
        title: "Eyelash Extensions",
        titleArabic: "تركيب الرموش",
        description:"Make-up, Tinting Eyelash Extensions",
        services: [
            { name: "Full Set", arabic: "مجموعة كاملة", price: "500 AED" },
            { name: "1 Month", arabic: "شهر ١", price: "250 AED" },
            { name: "Touch up & Refill", arabic: "جلسة نهائية وإعادة ملء", price: "150 AED" },
            { name: "One Time Use", arabic: "استخدام مرة واحدة", price: "300 AED" },
            { name: "Eyelash Removal", arabic: "إزالة الرموش", price: "100 AED" }
        ]
    },
    {
            id:"4",
        title: "Skin Care",
        titleArabic: "العناية بالبشرة",
        description:"Quick, calming, and glow-boosting — the perfect pick-me-up your skin will thank you for.",
        services: [
            { name: "Anti-Wrinkle, Revitalizing", arabic: "مكافحة التجاعيد وتجديد الحيوية", price: "250 AED" },
            { name: "Eye Treatment", arabic: "تحت العين", price: "300 AED" },
            { name: "Deep Cleansing", arabic: "تنظيف البشرة العميق", price: "350 AED" },
            { name: "Express Sensitive Skin Treatment", arabic: "علاج البشرة الحساسة", price: "350 AED" },
            { name: "Absolute Rehydrating Treatment", arabic: "علاج الترطيب المطلق", price: "285 AED" },
            { name: "Oxygenating Treatment", arabic: "علاج الأوكسجين", price: "550 AED" },
            { name: "Purifying Treatment", arabic: "علاج تنقية", price: "580 AED" },
            { name: "Hyaluronic Treatment", arabic: "علاج الهيالورونيك", price: "580 AED" },
            { name: "Lifting Treatment", arabic: "علاج الشد", price: "620 AED" },
            { name: "Collagen Treatment", arabic: "علاج الكولاجين", price: "735 AED" },
            { name: "Peeling Treatment", arabic: "علاج التقشير", price: "550 AED" },
            { name: "Complete Youthful Treatment", arabic: "علاج الشباب الكامل", price: "750 AED" },
            { name: "Brightening Program", arabic: "برنامج التفتيح", price: "850 AED" }
        ]
    }
];

function createServiceBlock(service) {
    const block = document.createElement('div');
    block.className = 'c-faq-a-text';
    block.innerHTML = `
        <div class="_4block-faq-text-div-main">
            <div class="_4block-top-text-div">
                <div class="_4block-faq-text-top-div">
                    <h1 class="p-30">${service.name}<span>${service.arabic}</span></h1>
                </div>
            </div>
            <div class="_4block-text-bottom-main-div">
                <div class="_4block-faq-text-bottom-div"><p>${service.price}</p></div>
                <a href="/service/${service.slug?service.slug:'404'}" class="_4block-btn-mob w-inline-block">
                    <h1 class="h-18 _4block">Make an appointment</h1>
                    <div class="white-circle-div-4block"></div>
                </a>
            </div>
        </div>

        <a  href="/service/${service.slug?service.slug:'404'}"  class="_4block-btn hide w-inline-block">
            <h1 class="h-18 _4block">Make an appointment</h1>
            <div class="white-circle-div-4block"></div>
        </a>
    `;
    return block;
}

function toggleWrapper(wrapper, arrow) {
    const isOpen = wrapper.style.height && wrapper.style.height !== '0px';
    if (!isOpen) {
        const fullHeight = [...wrapper.children].reduce((acc, el) => acc + el.scrollHeight, 0);
        wrapper.style.height = `${fullHeight}px`;
        arrow.style.transform = 'rotate(180deg)';
    } else {
        wrapper.style.height = '0px';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function updateParentHeight(parentWrapper) {
    let totalHeight = 0;
    parentWrapper.querySelectorAll(':scope > .c-faq-titles-content > .c-faq-a').forEach(wrapper => {
        if (wrapper.style.height && wrapper.style.height !== '0px') {
            totalHeight += wrapper.scrollHeight + wrapper.previousElementSibling.scrollHeight;
        } else {
            totalHeight += wrapper.previousElementSibling.scrollHeight;
        }
    });
    parentWrapper.style.height = `${totalHeight}px`;
}

function createChildBlock(child, parentWrapper) {
    const childWrapper = document.createElement('div');
    childWrapper.className = 'c-faq-titles-content';

    const header = document.createElement('div');
    header.className = 'c-faq-b';
    header.innerHTML = `
        <div class="c-faq-b-text">
            <div class="h-50-item">${child.title}
                <p class="pricelist-description">${child.description}</p>
            </div>
        </div>
        <div class="c-faq-icon">
            <div class="_w-faq-icon">
                <img class="arrow-img-4block" src="/nbeauty/static/src/img/arrow.svg">
            </div>
        </div>
    `;

    const serviceWrapper = document.createElement('div');
    serviceWrapper.className = 'c-faq-a';
    serviceWrapper.style.height = '0px';
    serviceWrapper.style.overflow = 'hidden';
    serviceWrapper.style.transition = 'height 0.5s ease';

    child.services.forEach(service => {
        serviceWrapper.appendChild(createServiceBlock(service));
    });

    header.addEventListener('click', e => {
        e.stopPropagation();
        toggleWrapper(serviceWrapper, header.querySelector('.arrow-img-4block'));
        updateParentHeight(parentWrapper);
    });

    childWrapper.appendChild(header);
    childWrapper.appendChild(serviceWrapper);
    return childWrapper;
}

function createMainCategory(category, container) {
    const item = document.createElement('div');
    item.className = 'c-faq-item-main';

    const header = document.createElement('div');
    header.className = 'c-faq-q next';
    header.innerHTML = `
        <div class="c-faq-q-text _02">
            <div class="h-70">0${category.id}</div>
            <div class="h-70 medium">${category.title}
                <p class="pricelist-description">${category.description}</p>
            </div>
        </div>
        <div class="c-faq-icon">
            <div class="_w-faq-icon-main">
                <img class="arrow-img-4block" src="/nbeauty/static/src/img/arrow.svg">
            </div>
        </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.className = 'c-faq-titles';
    wrapper.style.height = '0px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.transition = 'height 0.5s ease';

    if (category.children) {
        category.children.forEach(child => {
            wrapper.appendChild(createChildBlock(child, wrapper));
        });
    } else if (category.services) {
        const serviceWrapper = document.createElement('div');
        serviceWrapper.className = 'c-faq-a';
        serviceWrapper.style.height = '0px';
        serviceWrapper.style.overflow = 'hidden';
        serviceWrapper.style.transition = 'height 0.5s ease';

        category.services.forEach(service => {
            serviceWrapper.appendChild(createServiceBlock(service));
        });

        wrapper.appendChild(serviceWrapper);
    }

    header.addEventListener('click', () => {
        document.querySelectorAll('.c-faq-titles').forEach(w => {
            if (w !== wrapper) {
                w.style.height = '0px';
                const icon = w.previousElementSibling?.querySelector('.arrow-img-4block');
                if (icon) icon.style.transform = 'rotate(0deg)';
                // Also collapse inner .c-faq-a if present
                const innerFaq = w.querySelector('.c-faq-a');
                if (innerFaq) innerFaq.style.height = '0px';
            }
        });

        const arrow = header.querySelector('.arrow-img-4block');

        // CASE: Direct services
        if (category.services) {
            const serviceWrapper = wrapper.querySelector('.c-faq-a');
            toggleWrapper(serviceWrapper, arrow);

            // Match .c-faq-titles height to .c-faq-a
            const totalHeight = serviceWrapper.scrollHeight + header.scrollHeight;
            wrapper.style.height = serviceWrapper.style.height !== '0px' ? `${totalHeight}px` : '0px';
        } else {
            // CASE: With children
            toggleWrapper(wrapper, arrow);
        }
    });

    item.appendChild(header);
    item.appendChild(wrapper);
    container.appendChild(item);
}

const container = document.getElementById('faq-container');
serviceCategories.forEach(category => {
    createMainCategory(category, container);
});

// Cache all elements in variables (best practice)
const images = document.querySelectorAll('._6block-img');
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Function to open lightbox
function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add event listeners
images.forEach(img => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        const src = img.getAttribute('src') || img.getAttribute('t-attf-src');
        openLightbox(src);
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
