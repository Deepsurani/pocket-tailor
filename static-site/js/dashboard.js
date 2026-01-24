// Dashboard Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tabs = document.querySelectorAll('.dashboard-tab');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active states
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab
            tabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.id === 'tab-' + tabId) {
                    tab.classList.add('active');
                }
            });
        });
    });

    // User dropdown menu
    const userMenuBtn = document.querySelector('.user-menu-btn');
    const userDropdown = document.querySelector('.user-dropdown');

    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            userDropdown.classList.add('hidden');
        });
    }

    // Fabric filtering
    const fabricFilters = document.querySelectorAll('.filter-btn');
    const fabricCards = document.querySelectorAll('.fabric-card');

    fabricFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.dataset.filter;
            
            // Update active filter
            fabricFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            fabricCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Order detail buttons (placeholder)
    document.querySelectorAll('.order-card .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showToast('Order details feature coming soon!', 'info');
        });
    });

    // Appointment action buttons
    document.querySelectorAll('.appointment-actions .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.toLowerCase();
            if (action.includes('cancel')) {
                showToast('Appointment cancelled', 'success');
                this.closest('.appointment-card').style.opacity = '0.5';
            } else if (action.includes('reschedule')) {
                showToast('Redirecting to reschedule...', 'info');
            } else if (action.includes('book')) {
                window.location.href = 'booking.html';
            }
        });
    });

    // Edit measurements button
    const editMeasurementsBtn = document.querySelector('#tab-measurements .btn-outline');
    if (editMeasurementsBtn) {
        editMeasurementsBtn.addEventListener('click', function() {
            const measurementItems = document.querySelectorAll('.measurement-item span:last-child');
            const isEditing = this.textContent === 'Save Changes';
            
            if (isEditing) {
                // Save mode
                measurementItems.forEach(item => {
                    const input = item.querySelector('input');
                    if (input) {
                        item.textContent = input.value;
                    }
                });
                this.textContent = 'Edit Measurements';
                showToast('Measurements saved successfully!', 'success');
            } else {
                // Edit mode
                measurementItems.forEach(item => {
                    const value = item.textContent;
                    item.innerHTML = `<input type="text" value="${value}" class="measurement-input">`;
                });
                this.textContent = 'Save Changes';
            }
        });
    }

    // Toast notification
    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = 'toast ' + type;
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    }
});