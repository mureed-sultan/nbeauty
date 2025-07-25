alert("branch ")



document.addEventListener("DOMContentLoaded", function () {
    const dataElement = document.getElementById("branchData");
    if (!dataElement) return;

    const branches = JSON.parse(dataElement.textContent);
    let map, markers = [], userLocation = null;

    window.initMap = function () {
        const center = branches.length ? { lat: branches[0].lat, lng: branches[0].lng } : { lat: 24.8607, lng: 67.0011 };
        map = new google.maps.Map(document.getElementById("map"), { zoom: 12, center });

        renderMarkers(branches);
        renderBranchCards(branches);
        populateDropdown(branches);
        getUserLocation();
    };

    function renderMarkers(branchesData) {
        markers.forEach(m => m.setMap(null));
        markers = [];
        branchesData.forEach((branch, index) => {
            const marker = new google.maps.Marker({
                position: { lat: branch.lat, lng: branch.lng },
                map: map,
                title: branch.name
            });
            markers.push(marker);
        });
    }

    function renderBranchCards(branchesData) {
        const listContainer = document.getElementById("branchList");
        listContainer.innerHTML = "";

        branchesData.forEach((branch) => {
            const div = document.createElement("div");
            div.className = "branch-card";
            div.innerHTML = `
                <h4>${branch.name}</h4>
                <p><strong>Phone:</strong> ${branch.phone}</p>
                <p><strong>Address:</strong> ${branch.address}</p>
                <button class="directions-btn" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}','_blank')">Get Directions</button>
            `;
            listContainer.appendChild(div);
        });
    }

    function populateDropdown(branchesData) {
        const dropdown = document.getElementById("branchDropdown");
        branchesData.forEach(branch => {
            const option = document.createElement("option");
            option.value = branch.name;
            option.text = branch.name;
            dropdown.appendChild(option);
        });
    }

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

const script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg&callback=initMap";
script.async = true;
script.defer = true;
document.body.appendChild(script);

});
