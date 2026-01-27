/**
 * Scroll-Triggered Animations for ThreadSync Static Site
 * Uses Intersection Observer API to animate elements when they enter the viewport
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        threshold: 0.1,      // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Offset from viewport bottom
    };

    // Animation classes mapping
    const animationClasses = {
        'scroll-fade-up': 'animate-scroll-fade-up',
        'scroll-fade-in': 'animate-scroll-fade-in',
        'scroll-fade-left': 'animate-scroll-fade-left',
        'scroll-fade-right': 'animate-scroll-fade-right',
        'scroll-scale': 'animate-scroll-scale',
        'scroll-slide-up': 'animate-scroll-slide-up'
    };

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initScrollAnimations();
        initStaggeredAnimations();
        initParallaxEffects();
    });

    /**
     * Initialize scroll-triggered animations
     */
    function initScrollAnimations() {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: config.threshold,
            rootMargin: config.rootMargin
        });

        // Observe all elements with scroll animation classes
        Object.keys(animationClasses).forEach(function(className) {
            const elements = document.querySelectorAll('.' + className);
            elements.forEach(function(el) {
                // Set initial hidden state
                el.style.opacity = '0';
                observer.observe(el);
            });
        });

        // Also observe generic .scroll-animate class
        const genericElements = document.querySelectorAll('.scroll-animate');
        genericElements.forEach(function(el) {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    /**
     * Handle intersection events
     */
    function handleIntersection(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                // Get delay from data attribute or default to 0
                const delay = parseInt(el.dataset.scrollDelay) || 0;
                
                setTimeout(function() {
                    // Add the visible class
                    el.classList.add('scroll-visible');
                    
                    // Apply specific animation class based on trigger class
                    Object.keys(animationClasses).forEach(function(triggerClass) {
                        if (el.classList.contains(triggerClass)) {
                            el.classList.add(animationClasses[triggerClass]);
                        }
                    });
                    
                    // If it has the generic class, apply default animation
                    if (el.classList.contains('scroll-animate')) {
                        el.classList.add('animate-scroll-fade-up');
                    }
                    
                    el.style.opacity = '';
                }, delay);
                
                // Stop observing after animation (one-time trigger)
                observer.unobserve(el);
            }
        });
    }

    /**
     * Initialize staggered animations for child elements
     */
    function initStaggeredAnimations() {
        const staggerContainers = document.querySelectorAll('.scroll-stagger');
        
        const staggerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const children = container.querySelectorAll('.scroll-stagger-item');
                    
                    children.forEach(function(child, index) {
                        const delay = index * 100; // 100ms delay between each item
                        
                        setTimeout(function() {
                            child.classList.add('scroll-visible');
                            child.classList.add('animate-scroll-fade-up');
                        }, delay);
                    });
                    
                    staggerObserver.unobserve(container);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });
        
        staggerContainers.forEach(function(container) {
            // Hide all stagger items initially
            const items = container.querySelectorAll('.scroll-stagger-item');
            items.forEach(function(item) {
                item.style.opacity = '0';
            });
            staggerObserver.observe(container);
        });
    }

    /**
     * Initialize parallax effects on scroll
     */
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.scroll-parallax');
        
        if (parallaxElements.length === 0) return;
        
        let ticking = false;
        
        function updateParallax() {
            const scrollY = window.pageYOffset;
            
            parallaxElements.forEach(function(el) {
                const speed = parseFloat(el.dataset.parallaxSpeed) || 0.5;
                const rect = el.getBoundingClientRect();
                const elementTop = rect.top + scrollY;
                const viewportHeight = window.innerHeight;
                
                // Only apply parallax when element is in or near viewport
                if (scrollY + viewportHeight > elementTop && scrollY < elementTop + rect.height) {
                    const offset = (scrollY - elementTop) * speed;
                    el.style.transform = 'translateY(' + offset + 'px)';
                }
            });
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }

    /**
     * Counter animation for statistics
     */
    window.animateCounter = function(element, target, duration) {
        duration = duration || 2000;
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(updateCounter);
    };

    /**
     * Initialize counter animations when stats come into view
     */
    function initCounterAnimations() {
        const counterElements = document.querySelectorAll('[data-counter]');
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.counter);
                    const duration = parseInt(el.dataset.counterDuration) || 2000;
                    
                    window.animateCounter(el, target, duration);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(function(el) {
            counterObserver.observe(el);
        });
    }

    // Also run counter animations
    document.addEventListener('DOMContentLoaded', initCounterAnimations);

})();
