document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('nbeauty-popup');
    const form = document.getElementById('nbeauty-popup-form');

    if (popup && (window.location.pathname === '/' || window.location.pathname === '/web')) {
        setTimeout(() => popup.style.display = 'flex', 3000);
    }

    document.addEventListener('click', function (e) {
        if (e.target.id === 'nbeauty-popup-close' || e.target.id === 'nbeauty-popup') {
            popup.classList.add('fadeOut');
            setTimeout(() => popup.style.display = 'none', 300);
        }
    });

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            fetch('/nbeauty/popup/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(result => {
                showTemporaryModal("✅ Thank you! Your details were submitted.", "success");
                popup.classList.add('fadeOut');
                setTimeout(() => popup.style.display = 'none', 300);
                form.reset();
            })
            .catch(err => {
                console.error("❌ Error:", err);
                showTemporaryModal("❌ Error submitting form. Please try again.", "error");
            });
        });
    }

    function showTemporaryModal(message, type = "info") {
        let modal = document.createElement("div");
        modal.className = "nbeauty-toast " + type;
        modal.innerText = message;

        document.body.appendChild(modal);

        setTimeout(() => {
            modal.classList.add("fade-out");
            setTimeout(() => modal.remove(), 500);
        }, 5000); // Auto close after 5 seconds
    }
});
