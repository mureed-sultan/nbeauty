document.addEventListener("DOMContentLoaded", function () {
    const branches = JSON.parse(document.getElementById("branchData").textContent);

    const cityDropdown = document.getElementById("cityDropdown");
    const branchDropdown = document.getElementById("branchDropdown");
    const searchInput = document.getElementById("branchSearch");
    const branchList = document.getElementById("branchList");

    let map, markers = [];

    window.initMap = function () {
        const center = branches.length ? { lat: branches[0].lat, lng: branches[0].lng } : { lat: 24.8607, lng: 67.0011 };
        map = new google.maps.Map(document.getElementById("map"), { zoom: 11, center });
        updateUI(branches);
    };

    function updateUI(data) {
        renderMarkers(data);
        renderBranchCards(data);
    }

    function renderMarkers(data) {
        markers.forEach(m => m.setMap(null));
        markers = [];
        data.forEach(branch => {
            if (!branch.lat || !branch.lng) return;
            const marker = new google.maps.Marker({
                position: { lat: branch.lat, lng: branch.lng },
                map,
                title: branch.name
            });
            markers.push(marker);
        });
    }

    function renderBranchCards(data) {
        branchList.innerHTML = "";
        data.forEach(branch => {
            const div = document.createElement("div");
            div.className = "branch-card";
            div.innerHTML = `
                <h4>${branch.name}</h4>
                <p><strong>City:</strong> ${branch.city}</p>
                <p><strong>Phone:</strong> ${branch.phone}</p>
                <p><strong>Address:</strong> ${branch.address}</p>
                <button class="directions-btn"
                    onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}','_blank')">
                    Get Directions
                </button>`;
            branchList.appendChild(div);
        });
    }

    function filterBranches() {
        const searchVal = searchInput.value.toLowerCase();
        const selectedCity = cityDropdown.value;
        const selectedBranch = branchDropdown.value;

        let filtered = branches;

        if (selectedCity) filtered = filtered.filter(b => b.city === selectedCity);
        if (selectedBranch) filtered = filtered.filter(b => b.name === selectedBranch);
        if (searchVal) filtered = filtered.filter(b => b.name.toLowerCase().includes(searchVal));

        updateUI(filtered);
    }

    // ✅ City dropdown change -> update branch dropdown
    cityDropdown.addEventListener("change", function () {
        const selectedCity = this.value;
        const filteredBranches = selectedCity ? branches.filter(b => b.city === selectedCity) : branches;

        branchDropdown.innerHTML = '<option value="">All Branches</option>';
        filteredBranches.forEach(b => {
            const option = document.createElement("option");
            option.value = b.name;
            option.text = b.name;
            branchDropdown.appendChild(option);
        });

        filterBranches();
    });

    branchDropdown.addEventListener("change", filterBranches);
    searchInput.addEventListener("input", filterBranches);
});
