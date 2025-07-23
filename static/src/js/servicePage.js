document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('silk-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const rows = 70;
    const cols = 120;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    const points = [];

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            points.push({
                originX: x * spacingX,
                originY: y * spacingY,
                x: x * spacingX,
                y: y * spacingY,
                offset: Math.random() * 1000
            });
        }
    }

    function drawCloth() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#db2675'; // deep silk pink

        for (let y = 0; y < rows - 1; y++) {
            for (let x = 0; x < cols - 1; x++) {
                const i = y * cols + x;
                const p1 = points[i];
                const p2 = points[i + 1];
                const p3 = points[i + cols + 1];
                const p4 = points[i + cols];

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.lineTo(p4.x, p4.y);
                ctx.closePath();
                ctx.fill();
            }
        }
    }

    function animateCloth() {
        const time = Date.now() * 0.0015;
        for (let p of points) {
            const waveX = Math.sin(time + p.originY * 0.03) * 15;
            const waveY = Math.cos(time + p.originX * 0.03) * 10;
            p.x = p.originX + waveX;
            p.y = p.originY + waveY;
        }
        drawCloth();
        requestAnimationFrame(animateCloth);
    }

    animateCloth();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
});


                   const searchInput = document.querySelector('#service-search-input');
                        const categorySelect = document.querySelector('#category-filter');
                        const services = document.querySelectorAll('.service-item');

                        function filterServices() {
                            const searchText = searchInput.value.toLowerCase();
                            const selectedCategory = categorySelect.value;
                            services.forEach(service => {
                                const serviceName = service.dataset.serviceName.toLowerCase();
                                const categoryId = service.dataset.categoryId;
                                const matchesText = serviceName.includes(searchText);
                                const matchesCategory = !selectedCategory || categoryId === selectedCategory;
                                service.style.display = (matchesText && matchesCategory) ? '' : 'none';
                            });
                        }

                        searchInput.addEventListener('input', filterServices);
                        categorySelect.addEventListener('change', filterServices);

