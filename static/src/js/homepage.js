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
      },
      {
        title: "Blow Dry",
        titleArabic: "سيشوار",
        description:
          "Turn up the volume, experience blowouts that bring your hair to life!",
        price: "35",

      },
      {
        title: "Full Ammonia Free Color",
        titleArabic: "صبغة كاملة (خالية من امونيا)",
        description:
          "Color your world gently, vibrant hues, zero compromise, all care!",
        price: "220",
      },
      {
        title: "Full Color ",
        titleArabic: "صبغة كاملة",
        description:
          "Unleash your boldness, full color, full confidence, full you!",
        price: "110",
      },
      {
        title: "Color Rinse",
        titleArabic: "رينساج",
        description:
          "Refresh your shade, rinse away the ordinary, reveal the extraordinary!",
        price: "170",
      },
      {
        title: "Highlights",
        titleArabic: "هايلايت",
        description: "Shine bright, let your highlights steal the spotlight!",
        price: "370",
      },
      {
        title: "Decolorization",
        description:
          "Go lighter, go brighter, embrace a new canvas for your next look!",
        titleArabic: "سحب اللون",
        price: "200",
      },
      {
        title: "Hair Style",
        titleArabic: "تصفيف الشعر",
        description: "Style it your way, where every strand tells your story!",
        price: "250",
      },
      {
        title: "Hair Extension",
        titleArabic: "وصلات الشعر",
        description:
          "Longer, fuller, fabulous, let your hair dreams grow with us!",
        price: "15",
      },
      {
        title: "BB CRÈME ",
        titleArabic: "وصلات الشعر",
        description: "",
        price: "1200",
      },
      {
        title: "Botox ",
        titleArabic: "بوتوكس",
        description: "",
        price: "1200",
      },
      {
        title: "Kerastase ",
        titleArabic: "کیراستاس",
        description:
          "Experience hair luxury, Kerastase rituals for unmatched shine and softness.",
        price: "250",
      },
      {
        title: "L'oreal ",
        titleArabic: "کیراستاس",
        description:
          "Revitalize your look, L’Oréal treatments for vibrant, healthy hair every day.",
        price: "150",
      },
      {
        title: "Olaplex ",
        titleArabic: "أو¥بليكس",
        description:
          "Repair from within, Olaplex brings your hair back to its beautiful best.",
        price: "250",
      },
      {
        title: "Nashi Argan ",
        titleArabic: "ناشي أركان",
        description:
          "Nourish naturally, Nashi Argan leaves your hair silky, smooth, and glowing.",
        price: "160",
      },
      {
        title: "Collagen ",
        titleArabic: "العج",
        description:
          "Turn up the bounce—collagen treatments for fuller, youthful-looking hair.",
        price: "160",
      },
      {
        title: "Protein ",
        titleArabic: "العج",
        description:
          "Strength you can feel, protein therapy for hair that’s smooth, strong, and frizz-free.",
        price: "1200",
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
    children:[
   {
        title: "Skin Care",
        titleArabic: "‫بالبرشة‬ ‫العناية‬",
        description:
      "Quick, calming, and glow-boosting — the perfect pick-me-up your skin will thank you for.",
        price: "200",
      },
    ]
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

            </div>
        </div>

 <a href="/services?id=Skin&#32;Care" class="_4block-btnwithout hide w-inline-block" style="">
            <h1 class="h-18 _4block mobile-black" style="color: rgb(255, 255, 255);">check availability.</h1>
            <div class="white-circle-div-4block mob-hide" style="opacity: 1;"></div>
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
                <p class="pricelist-description-cost"> Starting From <span> AED  ${child.price}</span></p>
            </div>
        </div>
<a href="/services?id=${child.description}" class="_4block-btnwithout hide w-inline-block" style="">
            <h1 class="h-18 _4block" style="">check Prices</h1>
            <div class="white-circle-div-4block mob-hide" style="opacity: 1;"></div>
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


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read-more-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const text = this.previousElementSibling;
            text.classList.toggle('expanded');
            this.textContent = text.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });
});