document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INITIALIZATION ---
    async function initApp() {
        console.log("Initializing App...");
        const updateLabel = document.getElementById('lastUpdated');
        
        try {
            // A. Fetch Data
            const data = await PolluTrackAPI.fetchDashboardData();
            
            // B. Update Dashboard Numbers
            updateDashboardDOM(data.current);
            
            // C. Initialize Charts with Real Data
            // We verify functions exist to avoid errors if charts.js failed to load
            if (typeof initCharts === 'function') {
                initCharts(data.sources);
            }
            if (typeof initTrendChart === 'function') {
                initTrendChart(data.trends);
            }

            // D. Set Timestamp
            if (updateLabel) updateLabel.innerText = data.timestamp;

        } catch (error) {
            console.error("Critical Error:", error);
            if (updateLabel) updateLabel.innerText = "Connection Error";
        }
    }

    // --- 2. DOM UPDATER ---
    function updateDashboardDOM(current) {
        // Helper to safely set text
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.setAttribute('data-target', val); // Set target for animation
        };
        
        // Helper to safely set bar width
        const setBar = (id, val, max) => {
            const el = document.getElementById(id);
            if (el) el.style.width = Math.min((val / max) * 100, 100) + '%';
        };

        // Set Values
        setTxt('val-pm25', current.pm25);
        setTxt('val-pm10', current.pm10);
        setTxt('val-aqi', current.aqi);
        setTxt('val-temp', current.temperature);

        // Set Non-numeric Text
        const elCond = document.getElementById('val-condition');
        if (elCond) elCond.innerText = current.condition;

        // Animate Bars
        setBar('bar-pm25', current.pm25, 100); // Max 100
        setBar('bar-pm10', current.pm10, 200); // Max 200
        setBar('bar-aqi', current.aqi, 300);   // Max 300

        // Run Number Counter Animation
        runCounterAnimations();
    }

    // --- 3. COUNTER ANIMATION UTILITY ---
    function runCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    
                    if (target === 0) return; // Don't animate if 0 (waiting for data)

                    const duration = 1500; 
                    const increment = target / (duration / 16); 
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current).toLocaleString();
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target.toLocaleString();
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.1 });

        counters.forEach(c => observer.observe(c));
    }

    // --- 4. SCROLL REVEAL UTILITY ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- 5. PARTICLE BACKGROUND ---
    const particleContainer = document.getElementById('particles');
    if (particleContainer) {
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.style.width = Math.random() * 10 + 2 + 'px';
            p.style.height = p.style.width;
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDuration = Math.random() * 20 + 10 + 's';
            p.style.animationDelay = Math.random() * 5 + 's';
            particleContainer.appendChild(p);
        }
    }

    // START
    initApp();
});