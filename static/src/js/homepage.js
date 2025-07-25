const branchData = {
  Dubai: {
    address: "Al Barsha Mall – 1st Floor, Dubai",
    map: "https://maps.app.goo.gl/52iKfezbgSPFpawu9",
    phone: "+97143255948",
    whatsapp: "+97143255948",
  },
  "Abu Dhabi - Mushrif Mall": {
    address: "Mushrif Mall, Abu Dhabi",
    map: "#",
    phone: "+97124499783",
    whatsapp: "+97124499783",
  },
  "Abu Dhabi - Makani Al Shamkha": {
    address: "Makani Al Shamkha Mall, Abu Dhabi",
    map: "#",
    phone: "+97125848711",
    whatsapp: "+97125848711",
  },
  "Abu Dhabi - Bawabat Al Sharq": {
    address: "Bawabat Al Sharq Mall, Abu Dhabi",
    map: "#",
    phone: "+97125864027",
    whatsapp: "+97125864027",
  },
  "Abu Dhabi - Dalma Mall": {
    address: "Dalma Mall, Abu Dhabi",
    map: "#",
    phone: "+97124436720",
    whatsapp: "+97124436720",
  },
  "Ras Al Khaimah - Al Naeem City Center": {
    address: "Al Naeem City Center, Ras Al Khaimah",
    map: "#",
    phone: "+97172359145",
    whatsapp: "+97172359145",
  },
  "Ras Al Khaimah - Al Naeem Mall": {
    address: "Al Naeem Mall, Ras Al Khaimah",
    map: "#",
    phone: "+97172267540",
    whatsapp: "+97172267540",
  },
  "Ras Al Khaimah - My City Centre Al Dhait": {
    address: "My City Centre Al Dhait, Ras Al Khaimah",
    map: "#",
    phone: "+97172214172",
    whatsapp: "+97172214172",
  },
  "Ras Al Khaimah - Manar Mall": {
    address: "Manar Mall, Ras Al Khaimah",
    map: "#",
    phone: "+971542722555",
    whatsapp: "+971542722555",
  },
  "Ajman - City Life Al Jurf": {
    address: "City Life, Al Jurf, Ajman",
    map: "#",
    phone: "+97167317772",
    whatsapp: "+97167317772",
  },
  "Ajman - Radisson Blu Toombal": {
    address: "Radisson Blu Hotel, Ajman",
    map: "#",
    phone: "+971586403251",
    whatsapp: "+971586403251",
  },
  "Fujairah - Lulu Mall": {
    address: "Lulu Mall, Fujairah",
    map: "#",
    phone: "+97192237635",
    whatsapp: "+97192237635",
  },
};

function updateLocation(value) {
  const data = branchData[value];
  if (!data) return;
  document.getElementById("map-link").href = data.map;
  document.getElementById("map-link").textContent = data.address;
  document.getElementById("call-btn").href = "tel:" + data.phone;
  document.getElementById("whatsapp-btn").href =
    "https://wa.me/" + data.whatsapp;

  document.getElementById("location-point").classList.remove("hide");
  document.getElementById("location-btns").classList.remove("hide");
}

// Set default on page load
updateLocation("Dubai");

const selector = document.getElementById("city-selector");
selector.addEventListener("change", (event) => {
  const value = event.target.value;
  updateLocation(value);
});

const serviceCategories = [
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
          { name: "Hair Wash", arabic: "غسيل الشعر", price: "50 AED" },
          { name: "Trim", arabic: "قص أطراف الشعر", price: "80 AED" },
          { name: "Fringe Haircut", arabic: "قص الغرة", price: "50 AED" },
          { name: "Haircut", arabic: "قص الشعر", price: "150 AED" },
          {
            name: "Hair Cut and Blow Dry",
            arabic: "قص الشعر مع سيشوار",
            price: "190 AED",
          },
          {
            name: "Little Princess Cut",
            arabic: "قصة الأميرة الصغيرة",
            price: "70 AED",
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
          { name: "Fringe Blow Dry", arabic: "سيشوار الغرة", price: "35 AED" },
          {
            name: "Hair Blow Dry",
            arabic: "سيشوار الشعر",
            price: "80 - 200 AED",
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
          { name: "Roots", arabic: "الجذور", price: "220 AED" },
          {
            name: "Full Color INOA",
            arabic: "صبغ الشعر بالكامل (إينوا)",
            price: "110 AED",
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
            price: "160 - 220 AED",
          },
          { name: "Roots", arabic: "الجذور", price: "160 AED" },
          {
            name: "Full Hair Color",
            arabic: "صبغة شعر كاملة",
            price: "280 - 880 AED",
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
            price: "370 AED",
          },
        ],
      },
      {
        title: "Highlights",
        titleArabic: "هايلايت",
        description: "Shine bright, let your highlights steal the spotlight!",
        price: "370",
        services: [
          { name: "Half Head", arabic: "نصف الرأس", price: "420 - 870 AED" },
          { name: "Short Hair", arabic: "شعر قصير", price: "200 - 450 AED" },
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
            price: "250 AED",
          },
        ],
      },
      {
        title: "Hair Style",
        titleArabic: "تصفيف الشعر",
        description: "Style it your way, where every strand tells your story!",
        price: "250",
        services: [
          { name: "Hair Style A", arabic: "تصفيف أ", price: "350 AED" },
          { name: "Hair Style B", arabic: "تصفيف ب", price: "450 AED" },
          { name: "Hair Style C", arabic: "تصفيف ج", price: "550 AED" },
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
            price: "25 AED",
          },
          {
            name: "Remove Hair Extension only",
            arabic: "إزالة وصلة الشعر",
            price: "15 AED",
          },
          {
            name: "Replace Hair Extension (Per Piece)",
            arabic: "استبدال وصلة شعر",
            price: "30 AED",
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
            price: "25 AED",
          },
        ],
      },
      {
        title: "Botox ",
        titleArabic: "بوتوكس",
        description: "",
        price: "1200",
        services: [
          { name: "Hair Botox", arabic: "تركيب وصلة شعر", price: "25 AED" },
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
            price: "25 AED",
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
            price: "25 AED",
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
            price: "25 AED",
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
            name: "Treatment A , B , C , D",
            arabic: "‫د‬ ،‫ج‬ ،‫ب‬ ،‫أ‬ ‫عالج‬",
            price: "25 AED",
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
            price: "25 AED",
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
            price: "25 AED",
          },
        ],
      },
      {
        title: "Kerastase Ritual ",
        titleArabic: "طقوس كيراستاس",
        description:
          "Bespoke rituals, pure indulgence—discover your hair’s ultimate transformation.",
        price: "260",
      },
      {
        title: "Keratin",
        titleArabic: "علاج الشعر",
        price: "550",
        description:
          "Smooth perfection, keratin treatments for sleek, manageable, and shiny hair.",
        services: [
          { name: "Kids ", arabic: "علاج ", price: "250 - 500 AED" },
          {
            name: "Roots Front",
            arabic: "علاج لوريال",
            price: "150 - 450 AED",
          },
          {
            name: "Olaplex Hair Treatment",
            arabic: "علاج أولابليكس",
            price: "250 - 350 AED",
          },
          {
            name: "Nashi Argan Treatment A, B, C, D",
            arabic: "علاج ناشي أ, ب, ج, د",
            price: "160 - 310 AED",
          },
          {
            name: "Collagen Treatment A, B, C, D",
            arabic: "علاج الكولاجين أ, ب, ج, د",
            price: "160 - 310 AED",
          },
          {
            name: "Protein Hair Treatment",
            arabic: "علاج البروتين",
            price: "1200 - 2500 AED",
          },
          {
            name: "Keratin Hair Treatment",
            arabic: "علاج الكيراتين",
            price: "1200 - 2500 AED",
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
      },
      {
        title: "Tinting",
        titleArabic: "تلوين",
        description:
          "Naturally defined, effortlessly beautiful, let your features shine.",
        price: "150",
      },
      {
        title: "EyeLash Extentions",
        titleArabic: "وصت الرموش",
        description: "Wake up to wow, lush lashes, no mascara needed.",
        price: "70",
      },
      {
        title: "Curling",
        titleArabic: "تجعيد الرموش",
        description:
          "Lift, curl, and captivate lashes that mesmerize with every blink.",
        price: "300",
      },
    ],
  },
  {
    id: "3",
    title: "Skin Care",
    titleArabic: "تركيب الرموش",
    description:
      "Quick, calming, and glow-boosting — the perfect pick-me-up your skin will thank you for.",
    price: "200",
    services: [
      { name: "Full Set", arabic: "مجموعة كاملة", price: "500 AED" },
      { name: "1 Month", arabic: "شهر ١", price: "250 AED" },
      {
        name: "Touch up & Refill",
        arabic: "جلسة نهائية وإعادة ملء",
        price: "150 AED",
      },
      { name: "One Time Use", arabic: "استخدام مرة واحدة", price: "300 AED" },
      { name: "Eyelash Removal", arabic: "إزالة الرموش", price: "100 AED" },
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
      },
      {
        title: "Threading",
        titleArabic: "إزالة الشعر بالفتلة ",
        description:
          "Precision-perfect grooming — sharp lines, smooth results.",
        price: "25",
      },
      {
        title: "Bleaching",
        titleArabic: "تشق ",
        description: "Brighten up — even-toned glow without the hassle.",
        price: "50",
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
      },
      {
        title: "French",
        titleArabic: "فرنÌ ",
        description:
          "Elegance at your fingertips — that effortless French finish you love.",
        price: "40",
      },
      {
        title: "Add Ons",
        titleArabic: "إضافات ",
        description:
          "Little extras, big impact — personalize your nails your way.",
        price: "10",
      },
      {
        title: "Treatments",
        titleArabic: "إضافات ",
        description:
          "Pamper, protect, and nourish — because your hands and feet deserve more than just polish.",
        price: "85",
      },
      {
        title: "Gelish Classic",
        titleArabic: "جيليش كسيك ",
        description:
          "High-gloss, long-lasting magic — perfect nails that stay flawless for days.",
        price: "65",
      },
      {
        title: "Gelish French",
        titleArabic: "جيليش فرنÌ ",
        description:
          "Soft glam with serious staying power — French, but make it Gelish.",
        price: "55",
      },
      {
        title: "Gel Nails Natural",
        titleArabic: "جيليش فرنÌ ",
        description:
          "Naturally flawless nails with strength and shine that lasts.",
        price: "160",
      },
      {
        title: "Nail Brightening",
        titleArabic: "تفتيح اظافر ",
        description: "",
        price: "50",
      },
      {
        title: "Nail Liquid & Powder / Natural",
        titleArabic: "أظافر بطريقة السائل والباودر / طبيعي",
        description:
          "A glow-up for your nails — bright, fresh, and healthy-looking.",
        price: "180",
      },
      {
        title: "Hand Spa",
        titleArabic: "سبا اليدين",
        description:
          "Give your hands the spa day they deserve — hydration, repair, and softness.",
        price: "80",
      },
      {
        title: "Pedix",
        titleArabic: "بيديكس",
        description: "Smooth, soft, and refreshed, your feet’s ultimate treat.",
        price: "120",
      },
      {
        title: "Artistic Perfect DIP",
        titleArabic: "أرتيستيك بفكت ديب",
        description: "Strong, stunning color, dipped to perfection.",
        price: "15",
      },
      {
        title: "Artistic Polygel",
        titleArabic: "أرتيستيك بوليجل",
        description:
          "The best of both worlds, flexible like gel, strong like acrylic.",
        price: "300",
      },
      {
        title: "Removal with Manicure Repair per nai",
        titleArabic: "إزالة مع مانيك",
        description:
          "A quick fix for any chip, crack, or break, back to flawless in no time.",
        price: "25",
      },
    ],
  },
];

function createServiceBlock(service) {
  const block = document.createElement("div");
  block.className = "c-faq-a-text";
  block.innerHTML = `
        <div class="_4block-faq-text-div-main">
            <div class="_4block-top-text-div">
                <div class="_4block-faq-text-top-div">
                    <h1 class="p-30">${service.name}<span>${
    service.arabic
  }</span></h1>
                </div>
            </div>
            <div class="_4block-text-bottom-main-div">
                <div class="_4block-faq-text-bottom-div"><p> Started From ${
                  service.price
                }</p></div>
                <a href="/service/${
                  service.slug ? service.slug : "404"
                }" class="_4block-btn-mob w-inline-block">
                    <h1 class="h-18 _4block">Make an appointment</h1>
                    <div class="white-circle-div-4block"></div>
                </a>
            </div>
        </div>

        <a  href="/service/${
          service.slug ? service.slug : "404"
        }"  class="_4block-btn hide w-inline-block">
            <h1 class="h-18 _4block">Make an appointment</h1>
            <div class="white-circle-div-4block"></div>
        </a>
    `;
  return block;
}

function toggleWrapper(wrapper, arrow) {
  const isOpen = wrapper.style.height && wrapper.style.height !== "0px";
  if (!isOpen) {
    const fullHeight = [...wrapper.children].reduce(
      (acc, el) => acc + el.scrollHeight,
      0
    );
    wrapper.style.height = `${fullHeight}px`;
    arrow.style.transform = "rotate(180deg)";
  } else {
    wrapper.style.height = "0px";
    arrow.style.transform = "rotate(0deg)";
  }
}

function updateParentHeight(parentWrapper) {
  let totalHeight = 0;
  parentWrapper
    .querySelectorAll(":scope > .c-faq-titles-content > .c-faq-a")
    .forEach((wrapper) => {
      if (wrapper.style.height && wrapper.style.height !== "0px") {
        totalHeight +=
          wrapper.scrollHeight + wrapper.previousElementSibling.scrollHeight;
      } else {
        totalHeight += wrapper.previousElementSibling.scrollHeight;
      }
    });
  parentWrapper.style.height = `${totalHeight}px`;
}

function createChildBlock(child, parentWrapper) {
  const childWrapper = document.createElement("div");
  childWrapper.className = "c-faq-titles-content";

  const header = document.createElement("div");
  header.className = "c-faq-b";
  header.innerHTML = `
        <div class="c-faq-b-text">
            <div class="h-50-item">${child.title}
                <p class="pricelist-description">${child.description}</p>
                <p class="pricelist-description"> Starting From AED ${child.price}</p>
            </div>
        </div>
<a href="/pricelist" class="_4block-btn hide w-inline-block" style="">
            <h1 class="h-18 _4block" style="color: rgb(255, 255, 255);">Make an appointment</h1>
            <div class="white-circle-div-4block" style="opacity: 1;"></div>
        </a>
    `;

  const serviceWrapper = document.createElement("div");
  serviceWrapper.className = "c-faq-a";
  serviceWrapper.style.height = "0px";
  serviceWrapper.style.overflow = "hidden";
  serviceWrapper.style.transition = "height 0.5s ease";

  child.services?.forEach((service) => {
    serviceWrapper.appendChild(createServiceBlock(service));
  });

  header.addEventListener("click", (e) => {
    return;
    e.stopPropagation();
    toggleWrapper(serviceWrapper, header.querySelector(".arrow-img-4block"));
    updateParentHeight(parentWrapper);
  });

  childWrapper.appendChild(header);
  childWrapper.appendChild(serviceWrapper);
  return childWrapper;
}

function createMainCategory(category, container) {
  const item = document.createElement("div");
  item.className = "c-faq-item-main";

  const header = document.createElement("div");
  header.className = "c-faq-q next";
  header.innerHTML = `
        <div class="c-faq-q-text _02">
            <div class="h-70" style="width:1vw;">0${category.id}</div>
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

  const wrapper = document.createElement("div");
  wrapper.className = "c-faq-titles";
  wrapper.style.height = "0px";
  wrapper.style.overflow = "hidden";
  wrapper.style.transition = "height 0.5s ease";

  if (category.children) {
    category.children.forEach((child) => {
      wrapper.appendChild(createChildBlock(child, wrapper));
    });
  } else if (category.services) {
    const serviceWrapper = document.createElement("div");
    serviceWrapper.className = "c-faq-a";
    serviceWrapper.style.height = "0px";
    serviceWrapper.style.overflow = "hidden";
    serviceWrapper.style.transition = "height 0.5s ease";

    category.services.forEach((service) => {
      serviceWrapper.appendChild(createServiceBlock(service));
    });

    wrapper.appendChild(serviceWrapper);
  }

  header.addEventListener("click", () => {
    document.querySelectorAll(".c-faq-titles").forEach((w) => {
      if (w !== wrapper) {
        w.style.height = "0px";
        const icon =
          w.previousElementSibling?.querySelector(".arrow-img-4block");
        if (icon) icon.style.transform = "rotate(0deg)";
        // Also collapse inner .c-faq-a if present
        const innerFaq = w.querySelector(".c-faq-a");
        if (innerFaq) innerFaq.style.height = "0px";
      }
    });

    const arrow = header.querySelector(".arrow-img-4block");

    // CASE: Direct services
    if (category.services) {
      const serviceWrapper = wrapper.querySelector(".c-faq-a");
      toggleWrapper(serviceWrapper, arrow);

      // Match .c-faq-titles height to .c-faq-a
      const totalHeight = serviceWrapper.scrollHeight + header.scrollHeight;
      wrapper.style.height =
        serviceWrapper.style.height !== "0px" ? `${totalHeight}px` : "0px";
    } else {
      // CASE: With children
      toggleWrapper(wrapper, arrow);
    }
  });

  item.appendChild(header);
  item.appendChild(wrapper);
  container.appendChild(item);
}

const container = document.getElementById("faq-container");
serviceCategories.forEach((category) => {
  createMainCategory(category, container);
});

// Cache all elements in variables (best practice)
const images = document.querySelectorAll("._6block-img");
const lightbox = document.getElementById("image-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// Function to open lightbox
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

// Function to close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Add event listeners
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    const src = img.getAttribute("src") || img.getAttribute("t-attf-src");
    openLightbox(src);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

let popupCloseBtn = document.getElementById("popup-closebtn");
const appointmentPopup = document.getElementById("appintmentDiv");

// Add click event listener on the close button
popupCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  appointmentPopup.style.display = "none";
});
