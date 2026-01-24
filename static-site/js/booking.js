// Booking Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.booking-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 1;
    
    // Booking data
    const bookingData = {
        tailor: '',
        service: '',
        date: '',
        time: ''
    };

    // Set minimum date to today
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Tailor selection
    const tailorSelect = document.getElementById('tailor-select');
    if (tailorSelect) {
        tailorSelect.addEventListener('change', function() {
            bookingData.tailor = this.options[this.selectedIndex].text;
            validateStep1();
        });
    }

    // Service selection
    const serviceCards = document.querySelectorAll('.service-card input');
    serviceCards.forEach(input => {
        input.addEventListener('change', function() {
            const card = this.closest('.service-card');
            bookingData.service = card.querySelector('h4').textContent;
            validateStep1();
        });
    });

    // Date selection
    if (dateInput) {
        dateInput.addEventListener('change', function() {
            const date = new Date(this.value);
            bookingData.date = date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            validateStep2();
        });
    }

    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            timeSlots.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            bookingData.time = this.textContent;
            validateStep2();
        });
    });

    // Validation functions
    function validateStep1() {
        const tailorSelected = tailorSelect && tailorSelect.value !== '';
        const serviceSelected = document.querySelector('.service-card input:checked');
        const nextBtn = document.querySelector('#step-1 .btn-next');
        
        if (nextBtn) {
            nextBtn.disabled = !(tailorSelected && serviceSelected);
        }
    }

    function validateStep2() {
        const dateSelected = dateInput && dateInput.value !== '';
        const timeSelected = document.querySelector('.time-slot.selected');
        const nextBtn = document.querySelector('#step-2 .btn-next');
        
        if (nextBtn) {
            nextBtn.disabled = !(dateSelected && timeSelected);
        }
    }

    // Navigation
    function goToStep(step) {
        currentStep = step;
        
        // Update steps visibility
        steps.forEach((s, index) => {
            s.classList.remove('active');
            if (index + 1 === step) {
                s.classList.add('active');
            }
        });

        // Update progress indicators
        progressSteps.forEach((p, index) => {
            p.classList.remove('active', 'completed');
            if (index + 1 === step) {
                p.classList.add('active');
            } else if (index + 1 < step) {
                p.classList.add('completed');
            }
        });

        // Update summary on step 3
        if (step === 3) {
            updateSummary();
        }
    }

    function updateSummary() {
        const summaryTailor = document.getElementById('summary-tailor');
        const summaryService = document.getElementById('summary-service');
        const summaryDate = document.getElementById('summary-date');
        const summaryTime = document.getElementById('summary-time');

        if (summaryTailor) summaryTailor.textContent = bookingData.tailor || '-';
        if (summaryService) summaryService.textContent = bookingData.service || '-';
        if (summaryDate) summaryDate.textContent = bookingData.date || '-';
        if (summaryTime) summaryTime.textContent = bookingData.time || '-';
    }

    // Next buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep < 3) {
                goToStep(currentStep + 1);
            }
        });
    });

    // Previous buttons
    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                goToStep(currentStep - 1);
            }
        });
    });

    // Form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('booking-name').value;
            const email = document.getElementById('booking-email').value;
            const phone = document.getElementById('booking-phone').value;

            if (!name || !email || !phone) {
                showToast('Please fill in all required fields', 'error');
                return;
            }

            // Show success step
            document.getElementById('step-3').classList.remove('active');
            document.getElementById('step-success').classList.add('active');
            
            // Update all progress steps to completed
            progressSteps.forEach(p => {
                p.classList.remove('active');
                p.classList.add('completed');
            });

            showToast('Booking confirmed! Check your email for details.', 'success');
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