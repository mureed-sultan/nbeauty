// Example JSON data
const serviceCategoriesObjet = [
  {
    id: "1",
    title: "Hair Care",
    titleArabic: "العناية بالشعر",
    description:
      "Expert hands, extraordinary transformation.Your journey to beautiful hair begins here.",
    children: [
      {
        title: "Cut ",
        titleArabic: "قص وتصفيف",
        description:
          "Snip into a fresh new you, where every cut is a cut above the rest!",
        price: "50",
        services: [
          { name: "Hair Wash", arabic: "غسيل الشعر", price: "50 " },
          { name: "Trim", arabic: "قص أطراف الشعر", price: "80 " },
          { name: "Fringe Haircut", arabic: "قص الغرة", price: "50" },
          { name: "Haircut", arabic: "قص الشعر", price: "150 " },
          {
            name: "Hair Cut and Blow Dry",
            arabic: "قص الشعر مع سيشوار",
            price: "190  ",
          },
          {
            name: "Little Princess Cut",
            arabic: "قصة الأميرة الصغيرة",
            price: "70  ",
          },
        ],
      },
      {
        title: "Blow Dry",
        titleArabic: "سيشوار",
        description:
          "Turn up the volume, experience blowouts that bring your hair to life!",
        price: "35",

        services: [
          { name: "Fringe Blow Dry", arabic: "سيشوار الغرة", price: "35  " },
          {
            name: "Hair Blow Dry",
            arabic: "سيشوار الشعر",
            price: "80 - 200  ",
          },
        ],
      },
      {
        title: "Full Ammonia Free Color",
        titleArabic: "صبغة كاملة (خالية من امونيا)",
        description:
          "Color your world gently, vibrant hues, zero compromise, all care!",
        price: "220",
        services: [
          { name: "Roots", arabic: "الجذور", price: "220  " },
          {
            name: "Full Color INOA",
            arabic: "صبغ الشعر بالكامل (إينوا)",
            price: "110  ",
          },
        ],
      },
      {
        title: "Full Color ",
        titleArabic: "صبغة كاملة",
        description:
          "Unleash your boldness, full color, full confidence, full you!",
        price: "110",
        services: [
          {
            name: "Roots Front",
            arabic: "الجذور الأمامية",
            price: "160 - 220  ",
          },
          { name: "Roots", arabic: "الجذور", price: "160  " },
          {
            name: "Full Hair Color",
            arabic: "صبغة شعر كاملة",
            price: "280 - 880  ",
          },
        ],
      },
      {
        title: "Color Rinse",
        titleArabic: "رينساج",
        description:
          "Refresh your shade, rinse away the ordinary, reveal the extraordinary!",
        price: "170",
        services: [
          {
            name: "Hair Color Rinse",
            arabic: "رينساج الشعر",
            price: "370  ",
          },
        ],
      },
      {
        title: "Highlights",
        titleArabic: "هايلايت",
        description: "Shine bright, let your highlights steal the spotlight!",
        price: "370",
        services: [
          { name: "Half Head", arabic: "نصف الرأس", price: "420 - 870  " },
          { name: "Short Hair", arabic: "شعر قصير", price: "200 - 450  " },
        ],
      },
      {
        title: "Decolorization",
        description:
          "Go lighter, go brighter, embrace a new canvas for your next look!",
        titleArabic: "سحب اللون",
        price: "200",
        services: [
          {
            name: "Hair Decolorization",
            arabic: "سحب لون الشعر",
            price: "250  ",
          },
        ],
      },
      {
        title: "Hair Style",
        titleArabic: "تصفيف الشعر",
        description: "Style it your way, where every strand tells your story!",
        price: "250",
        services: [
          { name: "Hair Style A", arabic: "تصفيف أ", price: "350  " },
          { name: "Hair Style B", arabic: "تصفيف ب", price: "450  " },
          { name: "Hair Style C", arabic: "تصفيف ج", price: "550  " },
        ],
      },
      {
        title: "Hair Extension",
        titleArabic: "وصلات الشعر",
        description:
          "Longer, fuller, fabulous, let your hair dreams grow with us!",
        price: "15",
        services: [
          {
            name: "Place Hair Extension (Per Piece)",
            arabic: "تركيب وصلة شعر",
            price: "25  ",
          },
          {
            name: "Remove Hair Extension only",
            arabic: "إزالة وصلة الشعر",
            price: "15  ",
          },
          {
            name: "Replace Hair Extension (Per Piece)",
            arabic: "استبدال وصلة شعر",
            price: "30  ",
          },
        ],
      },
      {
        title: "BB CRÈME ",
        titleArabic: "وصلات الشعر",
        description: "",
        price: "1200",
        services: [
          {
            name: "BB Creme Application",
            arabic: "تركيب وصلة شعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Botox ",
        titleArabic: "بوتوكس",
        description: "",
        price: "1200",
        services: [
          { name: "Hair Botox", arabic: "تركيب وصلة شعر", price: "25  " },
        ],
      },
      {
        title: "Kerastase ",
        titleArabic: "کیراستاس",
        description:
          "Experience hair luxury, Kerastase rituals for unmatched shine and softness.",
        price: "250",
        services: [
          {
            name: "Kerastase Hair Ritual",
            arabic: "عج الشعر من كاستاس",
            price: "25  ",
          },
        ],
      },
      {
        title: "L'oreal ",
        titleArabic: "کیراستاس",
        description:
          "Revitalize your look, L’Oréal treatments for vibrant, healthy hair every day.",
        price: "150",
        services: [
          {
            name: "L'oreal HairTreatment",
            arabic: "عج الشعر من لوريال",
            price: "25  ",
          },
        ],
      },
      {
        title: "Olaplex ",
        titleArabic: "أو¥بليكس",
        description:
          "Repair from within, Olaplex brings your hair back to its beautiful best.",
        price: "250",
        services: [
          {
            name: "Olaplex HairTreatment",
            arabic: "عج أو¥بليكس للشعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Nashi Argan ",
        titleArabic: "ناشي أركان",
        description:
          "Nourish naturally, Nashi Argan leaves your hair silky, smooth, and glowing.",
        price: "160",
        services: [
          {
            name: "Olaplex HairTreatment",
            arabic: "عج أو¥بليكس للشعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Collagen ",
        titleArabic: "العج",
        description:
          "Turn up the bounce—collagen treatments for fuller, youthful-looking hair.",
        price: "160",
        services: [
          {
            name: "Treatment A , B , C , D",
            arabic: "عج أو¥بليكس للشعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Protein ",
        titleArabic: "العج",
        description:
          "Strength you can feel, protein therapy for hair that’s smooth, strong, and frizz-free.",
        price: "1200",
        services: [
          {
            name: "Protein HairTreatment",
            arabic: "عج أو¥بليكس للشعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Kerastase Ritual ",
        titleArabic: "طقوس كيراستاس",
        description:
          "Bespoke rituals, pure indulgence—discover your hair’s ultimate transformation.",
        price: "260",
        services: [
          {
            name: "Protein HairTreatment",
            arabic: "عج أو¥بليكس للشعر",
            price: "25  ",
          },
        ],
      },
      {
        title: "Keratin",
        titleArabic: "علاج الشعر",
        price: "550",
        description:
          "Smooth perfection, keratin treatments for sleek, manageable, and shiny hair.",
        services: [
          { name: "Kids ", arabic: "علاج ", price: "250 - 500  " },
          {
            name: "Roots Front",
            arabic: "علاج لوريال",
            price: "150 - 450  ",
          },
          {
            name: "Olaplex Hair Treatment",
            arabic: "علاج أولابليكس",
            price: "250 - 350  ",
          },
          {
            name: "Nashi Argan Treatment A, B, C, D",
            arabic: "علاج ناشي أ, ب, ج, د",
            price: "160 - 310  ",
          },
          {
            name: "Collagen Treatment A, B, C, D",
            arabic: "علاج الكولاجين أ, ب, ج, د",
            price: "160 - 310  ",
          },
          {
            name: "Protein Hair Treatment",
            arabic: "علاج البروتين",
            price: "1200 - 2500  ",
          },
          {
            name: "Keratin Hair Treatment",
            arabic: "علاج الكيراتين",
            price: "1200 - 2500  ",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Make-Up & Tinting Eyelash Extentions",
    titleArabic: "مكياج و صبغة",
    description:
      "From subtle glam to all-out wow, flawless makeup, defined brows, and lashes that speak volumes.",
    children: [
      {
        title: "Make-UP",
        titleArabic: "‫املكياج‬",
        description: "Step out stunning, make-up magic for every moment.",
        price: "150",
        services: [
          { name: "Eyes Only ", arabic: "للعيون فقط ", price: "150" },
          { name: "Day ", arabic: "نهاري ", price: "300" },
          { name: "Evening ", arabic: "سهرة ", price: "400" },
          { name: "Bridal ", arabic: "العرائس ", price: "1000" },
        ],
      },
      {
        title: "Tinting",
        titleArabic: "تلوين",
        description:
          "Naturally defined, effortlessly beautiful, let your features shine.",
        price: "150",
        services: [
          { name: "Eyebrows ", arabic: "الحواجب ", price: "50" },
          { name: "Eyelashes ", arabic: "الرموش ", price: "70" },
        ],
      },
      {
        title: "EyeLash Extentions",
        titleArabic: "وصت الرموش",
        description: "Wake up to wow, lush lashes, no mascara needed.",
        price: "70",
        services: [
          { name: "Full Set ", arabic: "مجموعة كاملة ", price: "500" },
          {
            name: "Touch up & Refill ",
            arabic: "́سة نهائية وإعادة ملء الرموش ",
            price: "250",
          },
          { name: "One Time Use", arabic: "استخدام ́رة واحدة ", price: "70" },
          { name: "Eyelash Removal", arabic: "إزالة الرموش ", price: "150" },
        ],
      },
      {
        title: "Curling",
        titleArabic: "تجعيد الرموش",
        description:
          "Lift, curl, and captivate lashes that mesmerize with every blink.",
        price: "300",
        services: [
          {
            name: "Enhance Treatmen ",
            arabic: "عج الرموش ا́تجعدة ",
            price: "300",
          },
          {
            name: "Enhance Treatmentwith Tint ",
            arabic: "عج وصبغ الرموش ا́تجعدة ",
            price: "350",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Skin Care",
    titleArabic: "العناية بالب1",
    description:
      "Quick, calming, and glow-boosting — the perfect pick-me-up your skin will thank you for.",
    price: "200",
    services: [
      {
        name: "Anti-Wrinkle, Revitalizing ",
        arabic: "مجموعة كاملة",
        price: "500  ",
      },
      { name: "Eye Treatment ", arabic: "تحت العين©", price: "500  " },
      { name: "Deep Cleansing", arabic: "عج الب1/4ة الحساسة", price: "300  " },
      {
        name: "Express Sensitive Skin Treatment ",
        arabic: "عج الب1/4ة الحساسة",
        price: "300",
      },
      {
        name: "Absolute Rehydrating Treatment ",
        arabic: "عج الب1/4ة الجافة",
        price: "350",
      },
      { name: "Oxygenating Treatment ", arabic: "عج اوكسج©", price: "350" },
      {
        name: "Purifying Treatment",
        arabic: "عج الب1/4ة الدهنية",
        price: "285",
      },
      { name: "Hyaluronic Treatment", arabic: "عج الهيالورونيك", price: "550" },
      { name: "Lifting Treatment", arabic: "عج شد الب1/4ة", price: "580" },
      { name: "Collagen Treatment", arabic: "عج الكو¥ج©", price: "580" },
      { name: "Peeling Treatment", arabic: "عج تقش الب1/4ة", price: "620" },
      {
        name: "Complete Youthful Treatment",
        arabic: "عج تجديد الب1/4ة",
        price: "735",
      },
      {
        name: "Comprehensive Solution",
        arabic: "حل كامل للعناية",
        price: "550",
      },
      {
        name: "Anti-Aging Personalized Solution",
        arabic: "عج مكافحة الشيخوخة",
        price: "750",
      },
      {
        name: "Brightening Program",
        arabic: "جلسات تفتيح الب1/4ة",
        price: "850",
      },
      {
        name: "halgo Prodige de Oceans / Facial Ritual",
        arabic: "طقوس تنظيف الب1/4ة والجسم من تالجو",
        price: "850",
      },
      {
        name: "IBEAUTY + Collagen Mask",
        arabic: "آي بيو± + قناع الكو¥ج©",
        price: "850",
      },
      {
        name: "IBEAUTY + Silicium Mask",
        arabic: "آي بيو± + قناع السيليسيوم",
        price: "850",
      },
      {
        name: "IBEAUTY + Hyaluronic Mask",
        arabic: "آي بيو± + قناع الهيالورونيك",
        price: "850",
      },
    ],
  },
  {
    id: "4",
    title: "Body Care",
    titleArabic: "العناية بالبشرة",
    description:
      "Smooth, radiant, and confident — from waxing to brightening, we care for every inch. ",
    children: [
      {
        title: "Waxing",
        titleArabic: "إزالة الشعر بالشمع",
        description:
          "Smooth skin, silky confidence — from brows to full body, we’ve got you covered.",
        price: "25",
        services: [
            { name: "Eyebrows", arabic: "الحواجب", price: "50" },
            { name: "Nose", arabic: "الأنف", price: "25" },
            { name: "Upper Lip", arabic: "الشفة العليا", price: "35" },
            { name: "Chin", arabic: "الذقن", price: "35" },
            { name: "Neck", arabic: "الرقبة", price: "50" },
            { name: "Full Face", arabic: "الوجه بالكامل", price: "90" },
            { name: "Half Arms", arabic: "نصف الذراعين", price: "50" },
            { name: "Underarms", arabic: "الإبطين", price: "50" },
            { name: "Full Arms", arabic: "الذراعين بالكامل", price: "70" },
            {
              name: "Full Arms & Underarms",
              arabic: "الذراعين والإبطين بالكامل",
              price: "100",
            },
            { name: "Half Legs", arabic: "نصف الساقين", price: "70" },
            { name: "Full Legs", arabic: "الساقين بالكامل", price: "100" },
            {
              name: "Full Legs & Feminine Line",
              arabic: "الساقين وخط البكيني بالكامل",
              price: "120",
            },
            { name: "Feminine Line", arabic: "خط البكيني", price: "55" },
            {
              name: "Half Feminine",
              arabic: "نصف منطقة البكيني",
              price: "90",
            },
            {
              name: "Full Feminine",
              arabic: "منطقة البكيني بالكامل",
              price: "100",
            },
            { name: "Buttocks", arabic: "الأرداف", price: "50" },
            { name: "Back", arabic: "الظهر", price: "75" },
            { name: "Stomach", arabic: "البطن", price: "60" },
            { name: "Tummy Line", arabic: "خط البطن", price: "40" },
            {
              name: "Full Body A",
              arabic: "الجسم بالكامل - A",
              price: "From 320",
            },
            {
              name: "Full Body B",
              arabic: "الجسم بالكامل - B",
              price: "From 365",
            },
            { name: "", arabic: "", price: "" },
        ],
      },
      {
        title: "Threading",
        titleArabic: "إزالة الشعر بالفتلة ",
        description:
          "Precision-perfect grooming — sharp lines, smooth results.",
        price: "25",
        services: [
          { name: "Forehead", arabic: "الجبهة", price: "25" },
          { name: "Eyebrows", arabic: "الحواجب", price: "35" },
          { name: "Shaving Eyebrows", arabic: "حلاقة الحواجب", price: "35" },
          { name: "Upper Lip", arabic: "الشفة العليا", price: "25" },
          { name: "Lower Lip", arabic: "الشفة السفلى", price: "25" },
          {
            name: "Upper Lip & Chin",
            arabic: "الشفة العليا والذقن",
            price: "35",
          },
          { name: "Neck", arabic: "الرقبة", price: "35" },
          { name: "Full Face", arabic: "الوجه بالكامل", price: "75" },
        ],
      },
      {
        title: "Bleaching",
        titleArabic: "تشق ",
        description: "Brighten up — even-toned glow without the hassle.",
        price: "50",
        services: [
          { name: "Eyebrows", arabic: "الحواجب", price: "50" },
          { name: "Face", arabic: "الوجه", price: "80" },
          { name: "Underarms", arabic: "الإبطين", price: "40" },
          { name: "Arms", arabic: "الذراعين", price: "65" },
          { name: "Legs", arabic: "الساقين", price: "85" },
          { name: "Full Body", arabic: "الجسم بالكامل", price: "225" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Nail Care",
    titleArabic: "العناية بالأظافر",
    description:
      "More than just polish — it's self-care, style, and confidence at your fingertips.",
    children: [
      {
        title: "Classic",
        titleArabic: "كسيÊ",
        description:
          "Simple, clean, and timeless — for nails that never go out of style.",
        price: "40",
        services: [
          { name: "Cut and File", arabic: "قص وتقليم الأظافر", price: "40" },
          {
            name: "Manicure",
            arabic: "العناية بالأظافر (المانيكير)",
            price: "75",
          },
          {
            name: "Pedicure",
            arabic: "العناية بالقدمين (الباديكير)",
            price: "85",
          },
          { name: "Combo", arabic: "باقة مانيكير وباديكير", price: "150" },
          {
            name: "Classic Polish Change",
            arabic: "تغيير طلاء الأظافر الكلاسيكي",
            price: "35",
          },
          {
            name: "Classic Polish Change Combo",
            arabic: "تغيير الطلاء الكلاسيكي (مانيكير وباديكير)",
            price: "70",
          },
        ],
      },
      {
        title: "French",
        titleArabic: "فرنÌ ",
        description:
          "Elegance at your fingertips — that effortless French finish you love.",
        price: "40",
        services: [
          {
            name: "Manicure",
            arabic: "العناية بالأظافر (المانيكير)",
            price: "85",
          },
          {
            name: "Pedicure",
            arabic: "العناية بالقدمين (الباديكير)",
            price: "95",
          },
          { name: "Combo", arabic: "باقة مانيكير وباديكير", price: "170" },
          {
            name: "French Polish Change",
            arabic: "تغيير الطلاء الفرنسي",
            price: "40",
          },
          {
            name: "French Polish Change Combo",
            arabic: "تغيير الطلاء الفرنسي (مانيكير وباديكير)",
            price: "80",
          },
          {
            name: "For the little ones (for girls aged 10 below only)",
            arabic: "للصغيرات (للبنات دون سن 10 سنوات فقط)",
            price: "40",
          },
          { name: "Princess Manicure", arabic: "مانيكير الأميرة", price: "40" },
          { name: "Princess Pedicure", arabic: "باديكير الأميرة", price: "70" },
          { name: "Combo", arabic: "باقة الأميرة مانيكير وباديكير", price: "" }, // If the last Combo needs price, please provide it
        ],
      },
      {
        title: "Add Ons",
        titleArabic: "إضافات ",
        description:
          "Little extras, big impact — personalize your nails your way.",
        price: "10",
        services: [
          { name: "Nail Art", arabic: "فن الأظافر", price: "15" },
          {
            name: "Nail Chrome Art per nail",
            arabic: "فن الأظافر بالكروم (لكل ظفر)",
            price: "10",
          },
          {
            name: "Nail Chrome Art per set",
            arabic: "فن الأظافر بالكروم (للمجموعة كاملة)",
            price: "60",
          },
          { name: "Stone", arabic: "أحجار الزينة", price: "10" },
        ],
      },
      {
        title: "Treatments",
        titleArabic: "إضافات ",
        description:
          "Pamper, protect, and nourish — because your hands and feet deserve more than just polish.",
        price: "85",
        services: [
          {
            name: "Callus For Feet Treatment A",
            arabic: "علاج الكالو للقدمين - A",
            price: "85",
          },
          {
            name: "Callus For Feet Treatment B",
            arabic: "علاج الكالو للقدمين - B",
            price: "100",
          },
          {
            name: "Paraffin Treatment for Hands with Gloves",
            arabic: "علاج البارافين لليدين مع القفازات",
            price: "90",
          },
          {
            name: "Paraffin Treatment for Feet with Socks",
            arabic: "علاج البارافين للقدمين مع الجوارب",
            price: "100",
          },
          {
            name: "Paraffin Treatment Combo with Gloves & Socks",
            arabic: "علاج البارافين (قناع كامل لليدين والقدمين)",
            price: "180",
          },
          {
            name: "Combow/ Socks & Gloves",
            arabic: "باقة الجوارب والقفازات",
            price: "130",
          },
          {
            name: "Almond Treatment for Hands",
            arabic: "علاج اللوز لليدين",
            price: "150",
          },
          {
            name: "Almond Treatment for Feet",
            arabic: "علاج اللوز للقدمين",
            price: "260",
          },
          {
            name: "Almond Combo",
            arabic: "باقة علاج اللوز لليدين والقدمين",
            price: "",
          }, // If there's a price for this, let me know
        ],
      },
      {
        title: "Gelish Classic",
        titleArabic: "جيليش كسيك ",
        description:
          "High-gloss, long-lasting magic — perfect nails that stay flawless for days.",
        price: "65",
        services: [
          { name: "Manicure", arabic: "مانيكير", price: "120" },
          { name: "Pedicure", arabic: "باديكير", price: "130" },
          { name: "Combo", arabic: "باقة مانيكير وباديكير", price: "240" },
          {
            name: "Classic Gelish Polish Change",
            arabic: "تغيير طلاء الجلش الكلاسيكي",
            price: "65",
          },
          {
            name: "Classic Gelish Polish Change Combo",
            arabic: "تغيير طلاء الجلش الكلاسيكي (مانيكير وباديكير)",
            price: "120",
          },
        ],
      },
      {
        title: "Gelish French",
        titleArabic: "جيليش فرنÌ ",
        description:
          "Soft glam with serious staying power — French, but make it Gelish.",
        price: "55",
        services: [
          { name: "Manicure", arabic: "مانيكير", price: "140" },
          { name: "Pedicure", arabic: "باديكير", price: "150" },
          { name: "Combo", arabic: "باقة مانيكير وباديكير", price: "280" },
          {
            name: "French Gelish Polish Change",
            arabic: "تغيير طلاء الجلش الفرنسي",
            price: "75",
          },
          {
            name: "French Gelish Polish Change Combo",
            arabic: "تغيير طلاء الجلش الفرنسي (مانيكير وباديكير)",
            price: "130",
          },
          {
            name: "Gel Polish Removal",
            arabic: "إزالة طلاء الجل",
            price: "55",
          },
        ],
      },
      {
        title: "Gel Nails Natural",
        titleArabic: "جيليش فرنÌ ",
        description:
          "Naturally flawless nails with strength and shine that lasts.",
        price: "160",
        services: [
          {
            name: "Natural with Tip",
            arabic: "تركيب طبيعي مع طرف",
            price: "250",
          },
          { name: "Natural Overlay", arabic: "طبقة طبيعية", price: "200" },
          {
            name: "Natural Infill",
            arabic: "إعادة تعبئة الطبقة الطبيعية",
            price: "160",
          },
        ],
      },
      {
        title: "French",
        titleArabic: "فرنÌ ",
        description:
          "Timeless sophistication — elevate your nails with a French twist.",
        price: "50",
        services: [
          { name: "French with Tip", arabic: "فرنش مع طرف", price: "280" },
          { name: "French Overlay", arabic: "طبقة فرنش", price: "250" },
          { name: "French Infill", arabic: "إعادة تعبئة الفرنش", price: "180" },
          {
            name: "Natural Extensions for Toes",
            arabic: "تركيبات طبيعية لأصابع القدم",
            price: "290",
          },
          {
            name: "French Extensions for Toes",
            arabic: "تركيبات فرنش لأصابع القدم",
            price: "320",
          },
          {
            name: "Removal With Manicure",
            arabic: "إزالة مع مانيكير",
            price: "120",
          },
          { name: "Repair per Nail", arabic: "إصلاح لكل ظفر", price: "50" },
          { name: "Gel polish", arabic: "طلاء جل", price: "65" },
        ],
      },
      {
        title: "Nail Brightening",
        titleArabic: "تفتيح اظافر ",
        description: "",
        price: "50",
        services: [
          { name: "Nail Brightening", arabic: "تفتيح اظافر", print: "50" },
        ],
      },
      {
        title: "Nail Liquid & Powder / Natural",
        titleArabic: "أظافر بطريقة السائل والباودر / طبيعي",
        description:
          "A glow-up for your nails — bright, fresh, and healthy-looking.",
        price: "50",
        services: [
          {
            name: "Acrylic Nail with Tip",
            arabic: "أظافر أكريليك مع طرف",
            price: "260",
          },
          {
            name: "Natural with Tip",
            arabic: "تركيب طبيعي مع طرف",
            price: "245",
          },
          { name: "Natural Overlay", arabic: "طبقة طبيعية", price: "220" },
          {
            name: "Natural Infill",
            arabic: "إعادة تعبئة الطبقة الطبيعية",
            price: "180",
          },
          { name: "Natural Sculpting", arabic: "نحت طبيعي", price: "260" },
        ],
      },

      {
        title: "Hand Spa",
        titleArabic: "سبا اليدين",
        description:
          "Give your hands the spa day they deserve — hydration, repair, and softness.",
        price: "80",
        services: [
          { name: "Hydrating", arabic: "ترطيب", price: "80" },
          {
            name: "Hydrating with Manicure",
            arabic: "ترطيب مع مانيكير",
            price: "120",
          },
          {
            name: "Hydrating with Paraffin",
            arabic: "ترطيب مع البارافين",
            price: "200",
          },
          { name: "Age Complex", arabic: "علاج العمر المركب", price: "100" },
          {
            name: "Age Complex with Manicure",
            arabic: "علاج العمر المركب مع مانيكير",
            price: "140",
          },
          {
            name: "Age Complex with Paraffin",
            arabic: "علاج العمر المركب مع البارافين",
            price: "220",
          },
        ],
      },
      {
        title: "Pedix",
        titleArabic: "بيديكس",
        description: "Smooth, soft, and refreshed, your feet’s ultimate treat.",
        price: "120",
        services: [
          { name: "Intense Treatment", arabic: "العلاج المكثف", price: "120" },
          {
            name: "Intense Treatment with Pedicure",
            arabic: "العلاج المكثف مع الباديكير",
            price: "180",
          },
          {
            name: "Intense Treatment with Paraffin",
            arabic: "العلاج المكثف بالبارافين",
            price: "250",
          },
          {
            name: "Detoxifying Treatment",
            arabic: "علاج إزالة السموم",
            price: "120",
          },
          {
            name: "Detoxifying Treatment with Pedicure",
            arabic: "علاج إزالة السموم مع الباديكير",
            price: "180",
          },
          {
            name: "Detoxifying Treatmentwith Paraffin",
            arabic: "علاج إزالة السموم مع البارافين",
            price: "250",
          },
        ],
      },
      {
        title: "Artistic Perfect DIP",
        titleArabic: "أرتيستيك بفكت ديب",
        description: "Strong, stunning color, dipped to perfection.",
        price: "15",
        services: [
          {
            name: "Artistic perfect DIP",
            arabic: "أرتيستيك بيرفكت ديب",
            price: "200",
          },
          {
            name: "Artistic perfect DIP ombre",
            arabic: "أرتيستيك بيرفكت ديب أومبري",
            price: "250",
          },
          {
            name: "Artistic perfect DIP design (per nail)",
            arabic: "أرتيستيك بيرفكت ديب ديزاين (لكل ظفر)",
            price: "15",
          },
        ],
      },
      {
        title: "Artistic Polygel",
        titleArabic: "أرتيستيك بوليجل",
        description:
          "The best of both worlds, flexible like gel, strong like acrylic.",
        price: "300",
        services: [
          { name: "Artistic Polygel", arabic: "أرتيستيك بوليجل", price: "300" },
          { name: "Normal Polish", arabic: "طلاء عادي", price: "300" },
          {
            name: "Normal French Polish",
            arabic: "طلاء أظافر عادي فرنش بوليش",
            price: "320",
          },
          { name: "Gel Polish", arabic: "طلاء جل بوليش", price: "365" },
          { name: "French Gel Polish", arabic: "طلاء جل فرنش", price: "400" },
        ],
      },
      {
        title: "Removal with Manicure Repair per nai",
        titleArabic: "إزالة مع مانيك",
        description:
          "A quick fix for any chip, crack, or break, back to flawless in no time.",
        price: "25",
        services: [
          {
            name: "Removal with Manicure",
            arabic: "إزالة مع مانيكير",
            price: "120",
          },
          { name: "Repair per nail", arabic: "إصلاح لكل ظفر", price: "25" },
        ],
      },
    ],
  },
];

document.addEventListener('DOMContentLoaded', () => {
    const slug = decodeURIComponent(window.location.pathname.split('/').pop()).replace(/-/g, ' ').trim().toLowerCase();

    const titleEl = document.getElementById('service-title');
    const descEl = document.getElementById('service-description');
    const priceEl = document.getElementById('service-price');
    const hiddenService = document.getElementById('selected-service');
    const serviceDropdown = document.getElementById('service-dropdown');

    let selectedService = null;

    // ✅ Build dropdown dynamically from serviceCategories
    serviceCategoriesObjet.forEach(cat => {
        const group = document.createElement('optgroup');
        group.label = cat.title;

        cat.children?.forEach(service => {
            const opt = document.createElement('option');
            opt.value = service.title;
            opt.textContent = `${service.title} - ${service.price} AED`;

            if (service.title.trim().toLowerCase() === slug) {
                opt.selected = true;
                selectedService = service;
            }
            group.appendChild(opt);

            // ✅ Nested sub-services
            if (service.services) {
                service.services.forEach(sub => {
                    const subOpt = document.createElement('option');
                    subOpt.value = sub.name;
                    subOpt.textContent = `-- ${sub.name} - ${sub.price} AED`;

                    if (sub.name.trim().toLowerCase() === slug) {
                        subOpt.selected = true;
                        selectedService = sub;
                    }
                    group.appendChild(subOpt);
                });
            }
        });

        serviceDropdown.appendChild(group);
    });

    // ✅ Display details of selected service
    if (selectedService) {
        titleEl.textContent = selectedService.title || selectedService.name;
        descEl.textContent = selectedService.description || "Experience the most luxurious beauty service.";
        priceEl.textContent = (selectedService.price || 0) + " AED";
        hiddenService.value = selectedService.title || selectedService.name;
    } else {
        titleEl.textContent = "Select a Service";
        descEl.textContent = "Choose from our wide range of luxury beauty services.";
        priceEl.textContent = "-";
        hiddenService.value = "";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const bookingDate = document.getElementById("booking-date");
    const bookingTime = document.getElementById("booking-time");

    const WORK_START = 9; // 9 AM
    const WORK_END = 21;  // 9 PM
    const MIN_HOURS_AHEAD = 2; // Minimum 2 hours ahead

    function setMinDateTime() {
        const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });
        const dubaiNow = new Date(now);

        // Set min date
        const today = dubaiNow.toISOString().split("T")[0];
        bookingDate.setAttribute("min", today);

        bookingDate.addEventListener("change", function () {
            let selectedDate = new Date(this.value + "T00:00:00");

            if (this.value === today) {
                let minHour = dubaiNow.getHours() + MIN_HOURS_AHEAD;
                if (minHour < WORK_START) minHour = WORK_START;
                if (minHour > WORK_END) minHour = WORK_END;

                bookingTime.setAttribute("min", `${String(minHour).padStart(2, '0')}:00`);
            } else {
                bookingTime.setAttribute("min", `${String(WORK_START).padStart(2, '0')}:00`);
            }

            bookingTime.setAttribute("max", `${String(WORK_END).padStart(2, '0')}:00`);
        });
    }

    setMinDateTime();
});
