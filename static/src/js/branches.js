    console.log("Branches Leaflet.js loaded ✅");

    // 🔹 Decode HTML entities
    function decodeHtmlEntities(str) {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

    // 🔹 Get raw JSON and parse
    let rawJson = document.getElementById("cityBranchData").textContent.trim();
    rawJson = decodeHtmlEntities(rawJson);
    const cityData = JSON.parse(rawJson || "[]");

    console.log("📌 City Data:", cityData);

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

    console.log("📌 Flattened Branches:", branches);

    let map = L.map('map').setView([24.8607, 67.0011], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    let markers = [];

    function renderMarkers(branchesData) {
        markers.forEach(m => map.removeLayer(m));
        markers = [];

        branchesData.forEach(branch => {
            if (branch.lat && branch.lng) {
                let marker = L.marker([branch.lat, branch.lng]).addTo(map)
                    .bindPopup(`<b>${branch.name}</b><br>${branch.address}<br>${branch.phone}`);
                markers.push(marker);
            }
        });
    }

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

    function focusBranch(branchId) {
        const branch = branches.find(b => b.id == branchId);
        if (!branch) return;
        map.setView([branch.lat, branch.lng], 15);
    }

    function getDirections(lat, lng) {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
    }

    // ✅ Init
    populateCityDropdown();
    populateBranchDropdown(branches);
    renderMarkers(branches);
    renderBranchCards(branches);

    // ✅ Event listeners
    document.getElementById("cityDropdown").addEventListener("change", applyFilters);
    document.getElementById("branchDropdown").addEventListener("change", applyFilters);
    document.getElementById("branchSearch").addEventListener("input", applyFilters);

    // ✅ User location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const userLocation = [pos.coords.latitude, pos.coords.longitude];
            L.marker(userLocation, { icon: L.icon({
                iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                iconSize: [32, 32]
            }) }).addTo(map).bindPopup("You are here").openPopup();
        });
    }
