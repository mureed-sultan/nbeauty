
        const serviceCategories = [
            {
                id: 1,
                title: "Hair Care",
                titleArabic: "العناية بالشعر",
                description: "Expert hands, extraordinary transformation.Your journey to beautiful hair begins here.",
                services: [
                    { name: "Cut", arabic: "قص", description: "Snip into a fresh new you, where every cut is a cut above the rest!", price: "50 AED" },
                    { name: "Hair Wash", arabic: "غسيل الشعر", description: "", price: "80 AED" },
                    { name: "Trim", arabic: "تشذيب", description: "", price: "50 AED" },
                    { name: "Fringe Haircut", arabic: "قص الغرة", description: "", price: "150 AED" },
                    { name: "Haircut", arabic: "قص الشعر", description: "", price: "190 AED" },
                    { name: "Hair Cut and Blow Dry", arabic: "قص الشعر مع سيشوار", description: "", price: "70 AED" },
                    { name: "Little Princess Cut", arabic: "قصة الأميرة الصغيرة", description: "", price: "35 AED" },
                    { name: "Blow Dry", arabic: "سيشوار", description: "Turn up the volume, experience blowouts that bring your hair to life!", price: "80 - 200 AED" },
                    { name: "Fringe Blow Dry", arabic: "سيشوار الغرة", description: "", price: "220 AED" },
                    { name: "Hair BlowDry", arabic: "سيشوار الشعر", description: "", price: "320 - 900 AED" },
                    { name: "Full Ammonia Free Color", arabic: "صبغة كاملة (خالية من الأمونيا)", description: "Color your world gently, vibrant hues, zero compromise, all care!", price: "110 AED" },
                    { name: "Roots", arabic: "الجذور", description: "", price: "160 AED" },
                    { name: "Full Color INOA", arabic: "صبغة كاملة INOA", description: "", price: "280 - 880 AED" },
                    { name: "Full Color", arabic: "صبغة كاملة", description: "Unleash your boldness, full color, full confidence, full you!", price: "170 - 350 AED" },
                    { name: "Roots Front", arabic: "الجذور الأمامية", description: "", price: "370 AED" },
                    { name: "Roots", arabic: "الجذور", description: "", price: "420 - 870 AED" },
                    { name: "Full Hair Color", arabic: "صبغة شعر كاملة", description: "", price: "200 - 450 AED" },
                    { name: "Color Rinse", arabic: "رينساج", description: "Refresh your shade, rinse away the ordinary, reveal the extraordinary!", price: "250 AED" },
                    { name: "Hair color rinse", arabic: "رينساج الشعر", description: "", price: "300 AED" },
                    { name: "Highlights", arabic: "الهايلايت", description: "Shine bright, let your highlights steal the spotlight!", price: "450 AED" },
                    { name: "Half Head", arabic: "نصف الرأس", description: "", price: "25 AED" },
                    { name: "Short Hair", arabic: "شعر قصير", description: "", price: "15 AED" },
                    { name: "Decolorization", arabic: "إزالة اللون", description: "Go lighter, go brighter, embrace a new canvas for your next look!", price: "30 AED" },
                    { name: "Hair Decolorization", arabic: "إزالة لون الشعر", description: "", price: "550 - 850 AED" },
                    { name: "Hair Style A", arabic: "تسريحة الشعر أ", description: "Style it your way, where every strand tells your story!", price: "1000 - 3000 AED" },
                    { name: "Hair Style B", arabic: "تسريحة الشعر ب", description: "Style it your way, where every strand tells your story!", price: "250 AED" },
                    { name: "Hair Style C", arabic: "تسريحة الشعر ج", description: "Style it your way, where every strand tells your story!", price: "350 AED" },
                    { name: "Place Hair Extension (Per Piece)", arabic: "تركيب وصلة الشعر", description: "", price: "450 AED" },
                    { name: "Remove Hair Extension only", arabic: "إزالة وصلة الشعر فقط", description: "", price: "25 AED" },
                    { name: "Replace Hair Extension (Per Piece)", arabic: "استبدال وصلة الشعر", description: "", price: "15 AED" },
                    { name: "BB Creme Application", arabic: "كريم بي بي", description: "", price: "30 AED" },
                    { name: "Hair Botox", arabic: "بوتوكس الشعر", description: "", price: "1200 - 2500 AED" },
                    { name: "Kerastase Hair Ritual", arabic: "طقوس كيراستاس", description: "Experience hair luxury, Kerastase rituals for unmatched shine and softness.", price: "250 - 500 AED" },
                    { name: "L'oreal Hair Treatment", arabic: "علاج لوريال", description: "Revitalize your look, L'Oréal treatments for vibrant, healthy hair every day.", price: "150 - 450 AED" },
                    { name: "Olaplex Hair Treatment", arabic: "علاج أولابلكس", description: "Repair from within, Olaplex brings your hair back to its beautiful best.", price: "250 - 350 AED" },
                    { name: "Nashi Argan Treatment", arabic: "علاج أرغان ناشي", description: "Nourish naturally, Nashi Argan leaves your hair silky, smooth, and glowing.", price: "160 - 310 AED" },
                    { name: "Collagen Treatment", arabic: "علاج الكولاجين", description: "Turn up the bounce—collagen treatments for fuller, youthful-looking hair.", price: "160 - 310 AED" },
                    { name: "Protein Hair Treatment", arabic: "علاج البروتين", description: "Strength you can feel, protein therapy for hair that's smooth, strong, and frizz-free.", price: "1200 - 3000 AED" },
                    { name: "Caviar Hairplex Ritual", arabic: "طقوس كافيار هيربلكس", description: "", price: "250 - 500 AED" },
                    { name: "Keratin Hair Treatment", arabic: "علاج الكيراتين", description: "", price: "1000 AED" },
                    { name: "Kerastase Ritual Chronologiste", arabic: "طقوس كيراستاس كرونولوجيست", description: "Indulge in elegance, Caviar Hairplex infuses your hair with pure luxury.", price: "550 AED" },
                    { name: "Aura Botanica Intense Ritual", arabic: "طقوس أورا بوتانيكا", description: "", price: "810 AED" },
                    { name: "24 Carats", arabic: "24 قيراط", description: "", price: "1200 - 3000 AED" },
                    { name: "Coiffage Chromatique", arabic: "كويفاج كروماتيك", description: "", price: "350 - 550 AED" },
                    { name: "Immunite Sechresse Protocol", arabic: "بروتوكول الجفاف المناعي", description: "", price: "260 - 360 AED" },
                    { name: "Fusio Dose Booster", arabic: "معزز جرعة فوسيو", description: "", price: "235 - 400 AED" },
                    { name: "Additional Treatment", arabic: "علاج إضافي", description: "A little extra love, custom add-ons for truly pampered hair.", price: "170 - 250 AED" }
                ]
            },
            {
                id: 2,
                title: "Make-Up & Tinting",
                titleArabic: "مكياج و صبغة",
                description: "From subtle glam to all-out wow, flawless makeup, defined brows, and lashes that speak volumes.",
                services: [
                    { name: "Eyes Only", arabic: "للعيون فقط", description: "", price: "From 150 AED" },
                    { name: "Day Make-up", arabic: "مكياج نهاري", description: "", price: "From 300 AED" },
                    { name: "Evening Make-up", arabic: "مكياج سهرة", description: "", price: "From 400 AED" },
                    { name: "Bridal Make-up", arabic: "مكياج العرائس", description: "", price: "From 1000 AED" },
                    { name: "Eyebrows Tint", arabic: "صبغة الحواجب", description: "Naturally defined, effortlessly beautiful, let your features shine.", price: "50 AED" },
                    { name: "Eyelashes Tint", arabic: "صبغة الرموش", description: "Naturally defined, effortlessly beautiful, let your features shine.", price: "70 AED" },
                    { name: "Eyelash Extensions Full Set", arabic: "تركيب رموش كاملة", description: "Wake up to wow, lush lashes, no mascara needed.", price: "500 AED" },
                    { name: "Eyelash Extensions 1 Month", arabic: "تركيب رموش لمدة شهر", description: "Wake up to wow, lush lashes, no mascara needed.", price: "250 AED" },
                    { name: "Eyelash Extensions Touch Up", arabic: "إعادة ملء الرموش", description: "Wake up to wow, lush lashes, no mascara needed.", price: "150 AED" },
                    { name: "One Time Use", arabic: "استخدام لمرة واحدة", description: "", price: "70 AED" },
                    { name: "Eyelash Removal", arabic: "إزالة الرموش", description: "", price: "150 AED" },
                    { name: "Curling", arabic: "تجعيد الرموش", description: "Lift, curl, and captivate lashes that mesmerize with every blink", price: "300 AED" },
                    { name: "Enhance Treatment", arabic: "علاج تعزيز", description: "", price: "350 AED" },
                    { name: "Enhance Treatment with Tint", arabic: "علاج تعزيز مع صبغة", description: "", price: "350 AED" }
                ]
            },
            {
                id: 3,
                title: "Skin Care",
                titleArabic: "العناية بالبشرة",
                description: "Quick, calming, and glow-boosting — the perfect pick-me-up your skin will thank you for.",
                services: [
                    { name: "Mini Facial", arabic: "علاج الوجه الصغير", description: "", price: "150 AED" },
                    { name: "Anti-Wrinkle", arabic: "مضاد للتجاعيد", description: "", price: "200 AED" },
                    { name: "Eye Treatment", arabic: "علاج العين", description: "", price: "250 AED" },
                    { name: "Deep Cleansing", arabic: "تنظيف عميق", description: "", price: "300 AED" },
                    { name: "Sensitive Skin Treatment", arabic: "علاج للبشرة الحساسة", description: "", price: "350 AED" },
                    { name: "Rehydrating Treatment", arabic: "علاج ترطيب كامل", description: "", price: "350 AED" },
                    { name: "Oxygenating Treatment", arabic: "علاج الأوكسجين", description: "", price: "285 AED" },
                    { name: "Purifying Treatment", arabic: "علاج البشرة الدهنية", description: "", price: "550 AED" },
                    { name: "Hyaluronic Treatment", arabic: "علاج الهيالورونيك", description: "", price: "580 AED" },
                    { name: "Lifting Treatment", arabic: "علاج شد البشرة", description: "", price: "580 AED" },
                    { name: "Collagen Treatment", arabic: "علاج الكولاجين", description: "Turn up the bounce—collagen treatments for fuller, youthful-looking hair.", price: "620 AED" },
                    { name: "Peeling Treatment", arabic: "علاج التقشير", description: "", price: "735 AED" },
                    { name: "Complete Youthful Treatment", arabic: "علاج تجديد الشباب", description: "", price: "550 AED" },
                    { name: "Anti-Aging Solution", arabic: "حل مكافحة الشيخوخة", description: "", price: "750 AED" },
                    { name: "Brightening Program", arabic: "برنامج تفتيح", description: "", price: "850 AED" },
                    { name: "Halgo Facial Ritual", arabic: "طقوس تنظيف تالجو", description: "", price: "850 AED" },
                    { name: "IBEAUTY + Collagen Mask", arabic: "آي بيوتي + قناع الكولاجين", description: "", price: "850 AED" },
                    { name: "IBEAUTY + Silicium Mask", arabic: "آي بيوتي + قناع السيليسيوم", description: "", price: "850 AED" },
                    { name: "IBEAUTY + Hyaluronic Mask", arabic: "آي بيوتي + قناع الهيالورونيك", description: "", price: "850 AED" }
                ]
            },
            {
                id: 4,
                title: "Body Care",
                titleArabic: "إزالة الشعر بالشمع",
                description: "Smooth, radiant, and confident — from waxing to brightening, we care for every inch. ",
                services: [
                    { name: "Eyebrows", arabic: "الحواجب", description: "", price: "50 AED" },
                    { name: "Nose", arabic: "الأنف", description: "", price: "25 AED" },
                    { name: "Upper Lip", arabic: "الشفة العليا", description: "", price: "35 AED" },
                    { name: "Chin", arabic: "الذقن", description: "", price: "35 AED" },
                    { name: "Neck", arabic: "الرقبة", description: "", price: "50 AED" },
                    { name: "Full Face", arabic: "الوجه بالكامل", description: "", price: "90 AED" },
                    { name: "Half Arms", arabic: "نصف الذراع", description: "", price: "50 AED" },
                    { name: "Underarms", arabic: "تحت الإبط", description: "", price: "50 AED" },
                    { name: "Full Arms", arabic: "الذراع بالكامل", description: "", price: "70 AED" },
                    { name: "Full Arms & Underarms", arabic: "الذراع وتحت الإبط", description: "", price: "100 AED" },
                    { name: "Half Legs", arabic: "نصف الساق", description: "", price: "60 AED" },
                    { name: "Full Legs", arabic: "كامل الساق", description: "", price: "90 AED" },
                    { name: "Full Legs & Feminine Line", arabic: "الساق مع خط الأنوثة", description: "", price: "120 AED" },
                    { name: "Feminine Line", arabic: "خط الأنوثة", description: "", price: "55 AED" },
                    { name: "Half Feminine", arabic: "نصف أنثوي", description: "", price: "90 AED" },
                    { name: "Full Feminine", arabic: "كامل الأنوثة", description: "", price: "100 AED" },
                    { name: "Buttocks", arabic: "الأرداف", description: "", price: "50 AED" },
                    { name: "Back", arabic: "الظهر", description: "", price: "75 AED" },
                    { name: "Stomach", arabic: "البطن", description: "", price: "60 AED" },
                    { name: "Tummy Line", arabic: "خط البطن", description: "", price: "40 AED" },
                    { name: "Full Body A", arabic: "الجسم بالكامل أ", description: "", price: "From 320 AED" },
                    { name: "Full Body B", arabic: "الجسم بالكامل ب", description: "", price: "From 365 AED" }
                ]
            },
            {
                id: 5,
                title: "Threading",
                titleArabic: "إزالة الشعر بالفتلة",
                description: "Precision-perfect grooming — sharp lines, smooth results.",
                services: [
                    { name: "Forehead", arabic: "الجبهة", description: "", price: "25 AED" },
                    { name: "Eyebrows", arabic: "الحواجب", description: "", price: "35 AED" },
                    { name: "Shaving Eyebrows", arabic: "حلق الحاجبين", description: "", price: "35 AED" },
                    { name: "Upper Lip", arabic: "الشفة العليا", description: "", price: "25 AED" },
                    { name: "Lower Lip", arabic: "الشفة السفلى", description: "", price: "25 AED" },
                    { name: "Upper Lip & Chin", arabic: "الشفة العليا والذقن", description: "", price: "35 AED" },
                    { name: "Neck", arabic: "الرقبة", description: "", price: "35 AED" },
                    { name: "Full Face", arabic: "الوجه بالكامل", description: "", price: "75 AED" }
                ]
            },
            {
                id: 6,
                title: "Bleaching",
                titleArabic: "التشقير",
                description: "Brighten up — even-toned glow without the hassle.",
                services: [
                    { name: "Eyebrows", arabic: "الحواجب", description: "", price: "50 AED" },
                    { name: "Face", arabic: "الوجه", description: "", price: "80 AED" },
                    { name: "Underarms", arabic: "تحت الإبط", description: "", price: "40 AED" },
                    { name: "Arms", arabic: "الذراع", description: "", price: "65 AED" },
                    { name: "Legs", arabic: "الساق", description: "", price: "85 AED" },
                    { name: "Full Body", arabic: "الجسم بالكامل", description: "", price: "225 AED" }
                ]
            },
            {
                id: 7,
                title: "Nail Care",
                titleArabic: "العناية بالأظافر",
                description: "More than just polish — it's self-care, style, and confidence at your fingertips.",
                services: [
                    { name: "Cut and File", arabic: "قص وبرد", description: "", price: "40 AED" },
                    { name: "Classic Manicure", arabic: "مانيكير كلاسيك", description: "", price: "75 AED" },
                    { name: "Classic Pedicure", arabic: "باديكير كلاسيك", description: "", price: "85 AED" },
                    { name: "Classic Combo", arabic: "كومبو كلاسيك", description: "", price: "150 AED" },
                    { name: "Classic Polish Change", arabic: "تغيير طلاء الأظافر الكلاسيكي", description: "", price: "35 AED" },
                    { name: "Classic Polish Change Combo", arabic: "كومبو تغيير الطلاء الكلاسيكي", description: "", price: "70 AED" },
                    { name: "French Manicure", arabic: "مانيكير فرنش", description: "", price: "85 AED" },
                    { name: "French Pedicure", arabic: "باديكير فرنش", description: "", price: "95 AED" },
                    { name: "French Combo", arabic: "كومبو فرنش", description: "", price: "170 AED" },
                    { name: "French Polish Change", arabic: "تغيير طلاء الأظافر فرنش", description: "", price: "40 AED" },
                    { name: "French Polish Change Combo", arabic: "كومبو تغيير الطلاء فرنش", description: "", price: "80 AED" },
                    { name: "Princess Manicure", arabic: "مانيكير الأميرة", description: "", price: "40 AED" },
                    { name: "Princess Pedicure", arabic: "باديكير الأميرة", description: "", price: "40 AED" },
                    { name: "Princess Combo", arabic: "كومبو الأميرة", description: "", price: "70 AED" },
                    { name: "Nail Art", arabic: "فن الأظافر", description: "", price: "15 AED" },
                    { name: "Nail Chrome Art per Nail", arabic: "فن كروم لكل ظفر", description: "", price: "10 AED" },
                    { name: "Nail Chrome Art per Set", arabic: "فن كروم للمجموعة", description: "", price: "60 AED" },
                    { name: "Stone", arabic: "حجر", description: "", price: "10 AED" },
                    { name: "Callus For Hands Treatment", arabic: "علاج الكالس لليدين", description: "", price: "45 AED" },
                    { name: "Callus For Feet Treatment A", arabic: "علاج الكالس للقدمين أ", description: "", price: "85 AED" },
                    { name: "Callus For Feet Treatment B", arabic: "علاج الكالس للقدمين ب", description: "", price: "100 AED" },
                    { name: "Paraffin Treatment for Hands", arabic: "علاج البارافين لليدين", description: "", price: "90 AED" },
                    { name: "Paraffin Treatment for Feet", arabic: "علاج البارافين للقدمين", description: "", price: "100 AED" },
                    { name: "Combo Paraffin Hands & Feet", arabic: "كومبو بارافين لليدين والقدمين", description: "", price: "180 AED" }
                ]
            },
            {
                id: 8,
                title: "Signature Services",
                titleArabic: "الخدمات المميزة",
                services: [
                    { name: "Zo Hydration Treatment", arabic: "علاج الترطيب من زو", description: "", price: "1000 AED (60 MIN)" },
                    { name: "Zo Brightening Treatment", arabic: "علاج التفتيح من زو", description: "", price: "1000 AED (60 MIN)" },
                    { name: "Zo Red Carpet Treatment", arabic: "علاج السجادة الحمراء من زو", description: "", price: "1100 AED (60 MIN)" },
                    { name: "Brightening Treatment", arabic: "علاج التفتيح", description: "", price: "1000 AED (90 MIN)" },
                    { name: "Collagen Treatment", arabic: "علاج الكولاجين", description: "", price: "1000 AED (90 MIN)" },
                    { name: "Wrinkles Filler Treatment", arabic: "علاج حشو التجاعيد", description: "", price: "1000 AED (90 MIN)" },
                    { name: "Peeling Treatment", arabic: "علاج التقشير", description: "", price: "1000 AED (90 MIN)" },
                    { name: "Eye Treatment", arabic: "علاج العين", description: "", price: "200 AED (20 MIN)" },
                    { name: "Contouring Treatment", arabic: "علاج الكونتور", description: "", price: "1200 AED (90 MIN)" },
                    { name: "Fire & Ice Treatment", arabic: "علاج النار والثلج", description: "", price: "1000 AED (60 MIN)" },
                    { name: "Foaming Enzyme Treatment", arabic: "علاج الأنزيمات الرغوية", description: "", price: "800 AED (60 MIN)" },
                    { name: "Exfoliating Clear Skin Treatment", arabic: "علاج تقشير البشرة الصافية", description: "", price: "700 AED (45 MIN)" },
                    { name: "DMK Acne Treatment", arabic: "علاج حب الشباب من DMK", description: "", price: "700 AED (45 MIN)" },
                    { name: "Aesthetic Lift Treatment", arabic: "علاج الشد التجميلي", description: "", price: "1100 AED (90 MIN)" },
                    { name: "Enzyme Therapy Treatment", arabic: "علاج الأنزيمات", description: "", price: "800 AED (45 MIN)" },
                    { name: "Eye Fusion Treatment", arabic: "علاج دمج العين", description: "", price: "300 AED (25 MIN)" },
                    { name: "Hydradermaze Treatment", arabic: "علاج هيدرادرماز", description: "", price: "800 AED (45 MIN)" },
                    { name: "TCA Underarm Treatment", arabic: "علاج TCA تحت الإبط", description: "", price: "800 AED (30 MIN)" },
                    { name: "Micro Current Treatment", arabic: "علاج التيار الدقيق", description: "", price: "900 AED (60 MIN)" },
                    { name: "TCA Treatment for Face", arabic: "علاج TCA للوجه", description: "", price: "850 AED (40 MIN)" },
                    { name: "TCA Albo Treatment", arabic: "علاج TCA ألبو", description: "", price: "550 AED (25 MIN)" },
                    { name: "Skinpen Hydration Treatment", arabic: "علاج الترطيب من سكينبن", description: "", price: "1200 AED (60 MIN)" },
                    { name: "Skinpen Glow & Lifting Treatment", arabic: "علاج التوهج والشد من سكينبن", description: "", price: "800 AED (45 MIN)" }
                ]
            }
        ];

        function renderAccordion() {
            const container = document.getElementById("service-accordion");
            let html = "";

            serviceCategories.forEach((cat, index) => {
                html += `
                <div data-click="faq" class="c-faq-item" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                    <div class="c-faq-q next">
                        <div class="c-faq-q-text _03">
                            <div class="h-70">${cat.id.toString().padStart(2, "0")}</div>
                            <div class="h-70 medium">${cat.title}<br><span class="cat-description">${cat.description}</span></div>
                        </div>
                        <div class="c-faq-icon">
                            <div class="_w-faq-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                                                 <img src="images/arrow.svg" loading="lazy" alt="" class="arrow-img-4block" />

                            </div>
                        </div>
                    </div>
                    <div class="c-faq-a" style="width: 1730.91px; height: 0px;">
                        ${cat.services.map(service => `
                        <div class="c-faq-a-text">
                            <div class="_4block-faq-text-div-main ${service.description.length > 50 ? 'no-fixed-height' : ''}">
                                <div class="_4block-top-text-div">
                                    <div class="_4block-faq-text-top-div">
                                        <h1 class="p-30 ${service.name.length > 20 ? '' : 'shorter'}">${service.name}</h1>
                                        ${service.description ? `<p class="p-16 ">${service.description}</p>` : 'test'}
                                    </div>
                                </div>
                                <div class="_4block-text-bottom-main-div vertical">
                                    <div class="_4block-faq-text-bottom-div vertical">
                                        <div class="_4blok-dur-div">
                                            <p class="p-21">Price</p>
                                            <p class="p-24">${service.price}</p>
                                        </div>
                                    </div>
                                    <a href="#" class="_4block-btn-mob w-inline-block">
                                        <h1 class="h-18 _4block">Make an appointment</h1>
                                        <div class="white-circle-div-4block"></div>
                                    </a>
                                </div>
                            </div>
                            <a href="/appointment.html" class="_4block-btn hide w-inline-block" style="opacity: 0; display: none; background-color: rgba(0, 0, 0, 0);">
                                <h1 class="h-18 _4block" style="color: rgb(0, 0, 0);">Make an appointment</h1>
                                <div class="white-circle-div-4block" style="opacity: 0;"></div>
                            </a>
                        </div>
                        `).join('')}
                    </div>
                </div>
                `;
            });

            container.innerHTML = html;
            setupAccordion();
        }

        function setupAccordion() {
            const headers = document.querySelectorAll(".c-faq-q");

            headers.forEach(header => {
                header.addEventListener("click", function () {
                    const currentItem = this.parentElement;
                    const currentContent = currentItem.querySelector(".c-faq-a");
                    const isOpen = currentItem.classList.contains("active");

                    // Close all others
                    document.querySelectorAll(".c-faq-item").forEach(item => {
                        if (item !== currentItem) {
                            item.classList.remove("active");
                            const container = item.querySelector(".c-faq-a");
                            container.style.height = "0";
                            item.querySelector("._w-faq-icon").style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
                        }
                    });

                    if (isOpen) {
                        // Close this one
                        currentItem.classList.remove("active");
                        currentContent.style.height = "0";
                        this.querySelector("._w-faq-icon").style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
                    } else {
                        // Open this one
                        currentItem.classList.add("active");
                        const fullHeight = currentContent.scrollHeight;
                        currentContent.style.height = fullHeight + "px";
                        this.querySelector("._w-faq-icon").style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)";
                    }
                });
            });
        }

        function setupHoverReveal() {
            const serviceItems = document.querySelectorAll('.c-faq-a-text');

            serviceItems.forEach(item => {
                const btn = item.querySelector('._4block-btn');

                item.addEventListener('mouseenter', () => {
                    console.log('Hovered:', item);

                    if (btn) {
                        btn.style.opacity = '1';
                        btn.style.display = 'flex';
                        btn.style.backgroundColor = 'rgba(0, 0, 0, 0)';

                        const circle = btn.querySelector('.white-circle-div-4block');
                        if (circle) {
                            circle.style.opacity = '0';
                        }

                        const h1 = btn.querySelector('h1');
                        if (h1) {
                            h1.style.color = 'rgb(0, 0, 0)';
                        }
                    }
                });

                item.addEventListener('mouseleave', () => {
                    if (btn) {
                        btn.style.opacity = '0';
                        btn.style.display = 'none';

                        const circle = btn.querySelector('.white-circle-div-4block');
                        if (circle) {
                            circle.style.opacity = '0';
                        }
                    }
                });
            });
        }

        document.addEventListener("DOMContentLoaded", renderAccordion);
        document.addEventListener("DOMContentLoaded", setupHoverReveal);