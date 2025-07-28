document.addEventListener("DOMContentLoaded", function () {
    const branchData = JSON.parse(document.getElementById("branchData").textContent);

    // ✅ Init map
    let centerLat = branchData.length > 0 ? branchData[0].lat : 25.276987;
    let centerLng = branchData.length > 0 ? branchData[0].lng : 55.296249;
    const map = L.map('map').setView([centerLat, centerLng], 12);

    // ✅ Add OSM tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // ✅ Add markers & populate branch list
    const branchList = document.getElementById("branchList");
    branchList.innerHTML = "";

    branchData.forEach(branch => {
        // Marker
        if (branch.lat && branch.lng) {
            const marker = L.marker([branch.lat, branch.lng]).addTo(map);
            marker.bindPopup(`<b>${branch.name}</b><br>${branch.address}<br>${branch.city}<br>Phone: ${branch.phone}`);
        }

        // Branch card
        const card = document.createElement("div");
        card.className = "branch-card";
        card.innerHTML = `
            <h4>${branch.name}</h4>
            <p>${branch.address}</p>
            <p><b>City:</b> ${branch.city}</p>
            <p><b>Phone:</b> ${branch.phone}</p>
            <button class="directions-btn" onclick="window.open('https://www.google.com/maps?q=${branch.lat},${branch.lng}', '_blank')">
                Get Directions
            </button>
        `;
        branchList.appendChild(card);
    });
});
