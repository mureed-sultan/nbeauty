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
