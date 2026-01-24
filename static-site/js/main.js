// Main JavaScript for ThreadSync Static Site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        if (trigger) {
            trigger.addEventListener('click', function() {
                const isOpen = item.classList.contains('open');
                
                // Close all other items
                accordionItems.forEach(i => i.classList.remove('open'));
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        }
    });

    // Tailor Search and Filter
    const searchInput = document.querySelector('.tailors-page .search-input-wrapper input');
    const specialtyFilter = document.querySelector('.tailors-page .filter-select');
    const tailorCards = document.querySelectorAll('.tailors-results .tailor-card');
    const resultsCount = document.querySelector('.results-count');
    const noResults = document.querySelector('.no-results');
    const clearFiltersBtn = document.querySelector('.clear-filters');

    function filterTailors() {
        if (!tailorCards.length) return;

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedSpecialty = specialtyFilter ? specialtyFilter.value : '';
        let visibleCount = 0;

        tailorCards.forEach(card => {
            const name = card.querySelector('.tailor-info h3')?.textContent.toLowerCase() || '';
            const specialty = card.querySelector('.tailor-specialty')?.textContent.toLowerCase() || '';
            const location = card.querySelector('.tailor-location')?.textContent.toLowerCase() || '';
            
            const matchesSearch = name.includes(searchTerm) || 
                                  specialty.includes(searchTerm) || 
                                  location.includes(searchTerm);
            const matchesSpecialty = !selectedSpecialty || specialty.includes(selectedSpecialty.toLowerCase());

            if (matchesSearch && matchesSpecialty) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results count
        if (resultsCount) {
            resultsCount.textContent = `${visibleCount} tailors found`;
        }

        // Show/hide no results message
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterTailors);
    }

    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', filterTailors);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            if (specialtyFilter) specialtyFilter.value = '';
            filterTailors();
        });
    }

    // Password Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const eyeIcon = this.querySelector('.eye-icon');
            const eyeOffIcon = this.querySelector('.eye-off-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                if (eyeIcon) eyeIcon.classList.add('hidden');
                if (eyeOffIcon) eyeOffIcon.classList.remove('hidden');
            } else {
                input.type = 'password';
                if (eyeIcon) eyeIcon.classList.remove('hidden');
                if (eyeOffIcon) eyeOffIcon.classList.add('hidden');
            }
        });
    });

    // Password Strength Validation
    const passwordInput = document.getElementById('password');
    const requirementsList = document.querySelector('.password-requirements');
    
    if (passwordInput && requirementsList) {
        const requirements = requirementsList.querySelectorAll('.requirement');
        
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Check each requirement
            requirements.forEach(req => {
                const type = req.dataset.requirement;
                let met = false;
                
                switch(type) {
                    case 'length':
                        met = password.length >= 8;
                        break;
                    case 'number':
                        met = /\d/.test(password);
                        break;
                    case 'uppercase':
                        met = /[A-Z]/.test(password);
                        break;
                }
                
                if (met) {
                    req.classList.add('met');
                } else {
                    req.classList.remove('met');
                }
            });
        });
    }

    // Confirm Password Match
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMatchMsg = document.querySelector('.password-match');
    
    if (confirmPasswordInput && passwordInput && passwordMatchMsg) {
        function checkPasswordMatch() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if (confirmPassword.length === 0) {
                passwordMatchMsg.style.display = 'none';
            } else if (password === confirmPassword) {
                passwordMatchMsg.textContent = 'Passwords match';
                passwordMatchMsg.style.color = 'var(--success)';
                passwordMatchMsg.style.display = 'block';
            } else {
                passwordMatchMsg.textContent = "Passwords don't match";
                passwordMatchMsg.style.color = 'var(--destructive)';
                passwordMatchMsg.style.display = 'block';
            }
        }
        
        confirmPasswordInput.addEventListener('input', checkPasswordMatch);
        passwordInput.addEventListener('input', checkPasswordMatch);
    }

    // Form Submissions (simulated)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            
            if (submitBtn) {
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
            }
            
            // Simulate API call
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
                
                // Show success toast
                showToast('Success! Your request has been submitted.', 'success');
                
                // Reset form
                form.reset();
            }, 1500);
        });
    });

    // Toast Notification
    window.showToast = function(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = 'toast ' + type;
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    };

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }
});