// Tailor Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar tab switching
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const tabs = document.querySelectorAll('.tailor-tab');
    const pageTitle = document.getElementById('page-title');

    const tabTitles = {
        overview: 'Dashboard',
        services: 'Create Services',
        orders: 'Orders & Booking',
        payment: 'Payment',
        reports: 'Reports'
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            tabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.id === 'tab-' + tabId) tab.classList.add('active');
            });
            if (pageTitle) pageTitle.textContent = tabTitles[tabId] || 'Dashboard';
            // Close mobile sidebar
            document.getElementById('sidebar').classList.add('-translate-x-full');
        });
    });

    // Mobile sidebar toggle
    const openBtn = document.getElementById('open-sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');

    if (openBtn) openBtn.addEventListener('click', () => sidebar.classList.remove('-translate-x-full'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.add('-translate-x-full'));

    // ===== CREATE SERVICES =====
    const addServiceBtn = document.getElementById('add-service-btn');
    const serviceFormCard = document.getElementById('service-form-card');
    const serviceForm = document.getElementById('service-form');
    const cancelService = document.getElementById('cancel-service');
    const serviceFormTitle = document.getElementById('service-form-title');

    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', () => {
            serviceForm.reset();
            serviceFormTitle.textContent = 'New Service';
            serviceFormCard.classList.add('active');
        });
    }

    if (cancelService) {
        cancelService.addEventListener('click', () => {
            serviceFormCard.classList.remove('active');
        });
    }

    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('svc-name').value;
            const price = document.getElementById('svc-price').value;
            if (!name || !price) { showToast('Please fill required fields', 'error'); return; }
            serviceFormCard.classList.remove('active');
            showToast('Service saved successfully!', 'success');
        });
    }

    // Delete service
    document.querySelectorAll('.del-svc').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('[data-id]').remove();
            showToast('Service deleted', 'success');
        });
    });

    // ===== ORDERS FILTER =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const orderCards = document.querySelectorAll('.order-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            orderCards.forEach(card => {
                if (filter === 'all' || card.dataset.status === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Toast
    function showToast(message, type) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = 'toast fixed bottom-6 right-6 px-4 py-3 rounded-lg text-sm font-medium shadow-lg z-[100] transition-all';
            if (type === 'success') toast.classList.add('bg-green-600', 'text-white');
            else if (type === 'error') toast.classList.add('bg-red-600', 'text-white');
            else toast.classList.add('bg-foreground', 'text-background');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }
    }
});
