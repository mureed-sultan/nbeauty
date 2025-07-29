console.log("Branches.js loaded ✅");

// 🔹 Decode HTML entities function
function decodeHtmlEntities(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
}

// 🔹 Get raw JSON and decode it
let rawJson = document.getElementById("cityBranchData").textContent.trim();
rawJson = decodeHtmlEntities(rawJson);
console.log("📌 Decoded Raw JSON:", rawJson);

// 🔹 Parse JSON
const cityData = JSON.parse(rawJson || "[]");

// 🔹 Flatten branches for filtering
let branches = [];
cityData.forEach(city => {
    city.branches.forEach(branch => {
        branches.push({
            city_id: city.city_id,
            city: city.city_name,
            ...branch
        });
    });
});

let map, markers = [], userLocation = null;

window.initMap = function () {
    console.log("initMap triggered ✅", branches);

    const center = { lat: 24.8607, lng: 67.0011 };
    map = new google.maps.Map(document.getElementById("map"), { zoom: 12, center });

    populateCityDropdown();
    populateBranchDropdown(branches);
    renderMarkers(branches);
    renderBranchCards(branches);
    getUserLocation();
    setupFilters();
};

// ✅ Render markers
function renderMarkers(branchesData) {
    markers.forEach(m => m.setMap(null));
    markers = [];

    branchesData.forEach((branch) => {
        const marker = new google.maps.Marker({
            position: { lat: branch.lat, lng: branch.lng },
            map: map,
            title: branch.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div><strong>${branch.name}</strong><br>${branch.address}<br>${branch.phone}</div>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
            focusBranch(branch.id);
        });

        markers.push(marker);
    });
}

// ✅ Render branch cards
function renderBranchCards(branchesData) {
    const listContainer = document.getElementById("branchList");
    listContainer.innerHTML = "";

    branchesData.forEach(branch => {
        listContainer.innerHTML += `
            <div class="branch-card" onclick="focusBranch(${branch.id})">
              <h4>${branch.name}</h4>
              <p><strong>City:</strong> ${branch.city}</p>
              <p><strong>Phone:</strong> ${branch.phone}</p>
              <p><strong>Address:</strong> ${branch.address}</p>
              <button class="directions-btn" onclick="event.stopPropagation(); getDirections(${branch.lat}, ${branch.lng})">Get Directions</button>
            </div>
        `;
    });
}

// ✅ Populate city dropdown
function populateCityDropdown() {
    const dropdown = document.getElementById("cityDropdown");
    dropdown.innerHTML = `<option value="">All Cities</option>`;
    cityData.forEach(city => {
        const option = document.createElement("option");
        option.value = city.city_id;
        option.text = city.city_name;
        dropdown.appendChild(option);
    });
}

// ✅ Populate branch dropdown
function populateBranchDropdown(branchesData) {
    const dropdown = document.getElementById("branchDropdown");
    dropdown.innerHTML = `<option value="">All Branches</option>`;
    branchesData.forEach(branch => {
        const option = document.createElement("option");
        option.value = branch.id;
        option.text = branch.name;
        dropdown.appendChild(option);
    });
}

// ✅ Setup filters
function setupFilters() {
    document.getElementById("cityDropdown").addEventListener("change", applyFilters);
    document.getElementById("branchDropdown").addEventListener("change", applyFilters);
    document.getElementById("branchSearch").addEventListener("input", applyFilters);
}

// ✅ Apply filters
function applyFilters() {
    const cityVal = document.getElementById("cityDropdown").value;
    const branchVal = document.getElementById("branchDropdown").value;
    const searchVal = document.getElementById("branchSearch").value.toLowerCase();

    let filtered = branches.filter(branch => {
        const matchCity = !cityVal || branch.city_id == cityVal;
        const matchBranch = !branchVal || branch.id == branchVal;
        const matchSearch = branch.name.toLowerCase().includes(searchVal);
        return matchCity && matchBranch && matchSearch;
    });

    populateBranchDropdown(filtered);
    renderMarkers(filtered);
    renderBranchCards(filtered);
}

// ✅ Focus on branch
function focusBranch(branchId) {
    const branch = branches.find(b => b.id == branchId);
    if (!branch) return;

    map.setZoom(15);
    map.panTo({ lat: branch.lat, lng: branch.lng });
}

// ✅ Get user location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "You are here",
                icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
        });
    }
}

function getDirections(lat, lng) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
}
