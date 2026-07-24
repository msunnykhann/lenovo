const presenterNotes = [
    // Slide 1
    `<strong>Slide 1: Title Screen</strong>
    <ul>
        <li>Welcome the audience and state the topic: Lenovo Corporation.</li>
        <li>Lenovo is a global technology powerhouse, and today we will cover its milestones, products, financials, global footprint, and the landmark 2005 IBM PC acquisition.</li>
        <li>Mention that it operates under the core vision: "Smarter Technology for All."</li>
    </ul>`,
    
    // Slide 2
    `<strong>Slide 2: Introduction & Key Stats</strong>
    <ul>
        <li>Lenovo is a Fortune Global 500 company, currently ranked #196.</li>
        <li>Explain the dual-headquarters model: Beijing (operational hub) and Morrisville, North Carolina (corporate headquarters).</li>
        <li>Highlight the scale: 180+ markets, 72,000 employees worldwide, and over 30 manufacturing plants.</li>
        <li>State their vision to make technology accessible and smarter for everyone.</li>
    </ul>`,
    
    // Slide 3
    `<strong>Slide 3: The Lenovo Odyssey (Timeline)</strong>
    <ul>
        <li>Frame this slide as a chronological story with 7 distinct chapters:</li>
        <li><strong>Ch 1 (1984):</strong> Detail the humble guardhouse origins in Beijing and the name 'Legend'.</li>
        <li><strong>Ch 2 (1992):</strong> Introduce the ThinkPad 700C, inspired by the Japanese bento box.</li>
        <li><strong>Ch 3 (2005):</strong> Exploded onto the world stage by acquiring IBM's PC unit (the turning point). <em>Acquisition details:</em> $1.25B cash/equity + $500M liabilities. IBM took 18.9% stake. Instantly became 3rd largest PC maker and gained ThinkPad brand.</li>
        <li><strong>Ch 4 (2013):</strong> Climbed to the global summit, becoming the World's #1 PC manufacturer.</li>
        <li><strong>Ch 5 (2014):</strong> Diversified into mobile (Motorola) and servers to build an enterprise ecosystem.</li>
        <li><strong>Ch 6 (2020):</strong> Released the Yoga 5G, merging laptops with high-speed cellular capability.</li>
        <li><strong>Ch 7 (2026):</strong> Emphasize the pivot into the Hybrid AI era with historic $83.1B in revenues.</li>
    </ul>`,
    
    // Slide 4
    `<strong>Slide 4: Products & Services Portfolio</strong>
    <ul>
        <li>Explain the transition from a pure PC manufacturer to an all-round infrastructure and service leader.</li>
        <li><strong>PCs:</strong> ThinkPad (enterprise durability), Yoga (2-in-1 premium), Legion (heavy gaming), IdeaPad (consumer).</li>
        <li><strong>Mobile:</strong> Motorola Razr foldable flip devices and Motorola Edge.</li>
        <li><strong>Infrastructure (ISG):</strong> ThinkSystem servers and liquid-cooled AI clusters for deep learning.</li>
        <li><strong>Services (SSG):</strong> TruScale (flexible pay-as-you-go IT infrastructure) and Premium Care.</li>
    </ul>`,
    
    // Slide 5
    `<strong>Slide 5: Competitor Analysis</strong>
    <ul>
        <li>Analyze the competitive landscape globally and locally in Pakistan.</li>
        <li><strong>Global:</strong> Lenovo leads the global PC market at 24.4%, with HP (~20%) and Dell (~16%) as main rivals.</li>
        <li><strong>Pakistan:</strong> HP (ProBook/EliteBook) and Dell (Inspiron/Latitude) are the primary competitors.</li>
        <li><strong>Segments:</strong> Lenovo's Legion dominates local high-end gaming demand due to cooling; ThinkPad goes head-to-head with HP EliteBook in corporate deals.</li>
    </ul>`,
    
    // Slide 6
    `<strong>Slide 6: Financial Performance 2026</strong>
    <ul>
        <li>Highlight the massive growth: Revenue of $83.1 Billion representing a 20% Year-over-Year increase.</li>
        <li>Net income skyrocketed by 38% to reach $1.9 Billion.</li>
        <li><strong>AI Focus:</strong> AI infrastructure and AI PCs now make up 33% of total revenue, doubling YoY.</li>
        <li>PC market share sits at 24.4%, widening the lead over competitors to its highest in 15 years.</li>
    </ul>`,
    
    // Slide 7
    `<strong>Slide 7: Global Footprint & Hubs</strong>
    <ul>
        <li>Explain that Lenovo relies on a decentralized, resilient global supply chain.</li>
        <li>Point out the key hubs on the map:</li>
        <li><strong>Morrisville:</strong> US PC Operations, corporate leadership, and logistics hub.</li>
        <li><strong>Beijing:</strong> Global manufacturing oversight and APAC corporate operations.</li>
        <li><strong>Stuttgart:</strong> EMEA regional control and enterprise deployment.</li>
        <li><strong>Singapore:</strong> Core financial hub and sales gateway for Southeast Asia.</li>
        <li><strong>Yamato (Japan):</strong> The famous engineering laboratory where the ThinkPad is designed and stress-tested.</li>
    </ul>`,

    // Slide 8
    `<strong>Slide 8: FIFA World Cup 2026 Partnership</strong>
    <ul>
        <li>Discuss Lenovo's historic signing as the Official FIFA Technology Partner.</li>
        <li>The tournament will span across USA, Canada, and Mexico (2026).</li>
        <li>Detail the technology integration: supplying player analytics, tracking, telemetry systems, and data infrastructure.</li>
        <li>Lenovo ThinkSystem edge servers will power real-time computing inside the stadiums.</li>
    </ul>`,

    // Slide 9
    `<strong>Slide 9: AI PC & Hybrid AI Strategy</strong>
    <ul>
        <li>Explain the "AI for All" hybrid AI vision: combining public cloud speed with private on-device security.</li>
        <li><strong>Hardware:</strong> Next-generation devices shipping with dedicated Neural Processing Units (NPUs).</li>
        <li><strong>Data Centers:</strong> Lenovo Neptune direct liquid-cooling technology reduces server energy consumption by up to 40%.</li>
    </ul>`,

    // Slide 10
    `<strong>Slide 10: Lenovo & M&P Distribution (Pakistan)</strong>
    <ul>
        <li>Introduce Muller & Phipps (M&P) as the official authorized distributor for Lenovo in Pakistan.</li>
        <li>Logistics and reseller dealer networks are managed via M&P's tech arm, Tech Sirat (acquired in 2016).</li>
        <li><strong>Acquisition Impact:</strong> Prior to 2016, Tech Sirat had scattered retail distribution and inconsistent warranty services. M&P's acquisition backed them with a massive 800+ location network, exclusive Lenovo partnership, and dedicated local repair hubs.</li>
        <li>Explain the official warranty benefit: 1-2 years direct local manufacturer warranty on authorized imports.</li>
    </ul>`,

    // Slide 11
    `<strong>Slide 11: M&P vs. Grey Market Dynamics</strong>
    <ul>
        <li>Analyze the local Pakistan laptop market structure: Authorized imports hold 45% share, while Grey Market imports hold 55%.</li>
        <li><strong>Authorized Channel:</strong> Fully compliant customs duties, 100% brand new, with full local support.</li>
        <li><strong>Grey Market:</strong> Void warranty, third-party repair, and potential for refurbished or box-opened units.</li>
        <li><strong>M&P Revenue Drivers:</strong> Strongly driven by B2B enterprise contracts and government/education tenders.</li>
        <li>Highlight the 15% YoY growth for M&P as local companies prioritize compliance.</li>
    </ul>`,
    
    // Slide 12
    `<strong>Slide 12: Sustainability & Future Vision</strong>
    <ul>
        <li><strong>Intelligent Transformation:</strong> Diversifying beyond PCs into cloud, AI, and smart infrastructure.</li>
        <li><strong>Sustainability:</strong> Committing to Net-Zero greenhouse emissions by 2050, validated by SBTi.</li>
        <li><strong>Growth Target:</strong> Aiming to cross the $100 Billion revenue milestone by 2028.</li>
        <li><strong>Lenovo Foundation:</strong> Corporate social responsibility focusing on STEM education and digital inclusion.</li>
        <li>Open the floor for questions and thank the audience.</li>
    </ul>`
];

// Hub Database for Interactive Map
const hubData = {
    morrisville: {
        title: "Morrisville Hub",
        region: "North Carolina, USA",
        focus: "Global Corporate HQ & R&D",
        significance: "Center of US PC operations & logistics",
        staff: "Core Executive Leadership"
    },
    beijing: {
        title: "Beijing Hub",
        region: "China",
        focus: "Global Operational HQ",
        significance: "Center of manufacturing & APAC marketing",
        staff: "Supply Chain & Operations Team"
    },
    stuttgart: {
        title: "Stuttgart Hub",
        region: "Germany",
        focus: "Europe Enterprise Operations",
        significance: "Coordinates EMEA services and logistics",
        staff: "EMEA Management & Support"
    },
    singapore: {
        title: "Singapore Hub",
        region: "Singapore",
        focus: "APAC Sales & Marketing HQ",
        significance: "Financial and logistical nexus for Asia-Pac",
        staff: "APAC Sales & Finance Leadership"
    },
    yamato: {
        title: "Yamato Lab",
        region: "Yokohama, Japan",
        focus: "ThinkPad Design & Engineering",
        significance: "Birthplace and engineering hub of ThinkPad R&D",
        staff: "Premium Hardware Engineers"
    }
};

// State Variables
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Timer State
let timerInterval = null;
let secondsElapsed = 0;

// Initialize Elements
const progressBar = document.getElementById('progress-bar');
const currentSlideNum = document.getElementById('current-slide-num');
const totalSlidesNum = document.getElementById('total-slides-num');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnNotes = document.getElementById('btn-notes');
const btnFullscreen = document.getElementById('btn-fullscreen');
const btnPrint = document.getElementById('btn-print');
const presenterPanel = document.getElementById('presenter-panel');
const notesContent = document.getElementById('notes-content');
const previewNextTitle = document.getElementById('preview-next-title');
const notesTimer = document.getElementById('notes-timer');

totalSlidesNum.textContent = totalSlides;

// Navigation Function
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    // Deactivate current slide
    slides[currentSlide].classList.remove('active');
    
    // If moving away from financial slide (index 5), reset charts
    if (currentSlide === 6) {
        resetFinancialCharts();
    }
    
    const previousSlide = currentSlide;
    currentSlide = index;
    
    // If navigating to Slide 3 (index 2 - History), set timeline state based on direction
    if (currentSlide === 2) {
        const timelineBtns = document.querySelectorAll('.timeline-btn');
        if (timelineBtns.length > 0) {
            const targetBtn = previousSlide > 2 ? timelineBtns[timelineBtns.length - 1] : timelineBtns[0];
            if (targetBtn) {
                targetBtn.click();
            }
        }
    }
    
    // If navigating to Slide 4 (index 3 - Products & Services), set products tab based on direction
    if (currentSlide === 3) {
        const productBtns = document.querySelectorAll('.product-menu-btn');
        if (productBtns.length > 0) {
            const targetBtn = previousSlide > 3 ? productBtns[productBtns.length - 1] : productBtns[0];
            if (targetBtn) {
                targetBtn.click();
            }
        }
    }
    
    // Activate new slide
    slides[currentSlide].classList.add('active');
    
    // Update Progress Bar
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update Slide Numbers
    currentSlideNum.textContent = currentSlide + 1;
    
    // Trigger animations if active slide is Financial (index 5)
    if (currentSlide === 6) {
        animateFinancialCharts();
    }
    
    // Update Presenter Notes
    updatePresenterNotes();
}

function nextSlide() {
    // If on Slide 3 (index 2 - History) and not on last chapter, advance timeline chapter instead
    if (currentSlide === 2) {
        const activeBtn = document.querySelector('.timeline-btn.active');
        if (activeBtn) {
            const nextBtn = activeBtn.nextElementSibling;
            if (nextBtn && nextBtn.classList.contains('timeline-btn')) {
                nextBtn.click();
                return; // Intercept: don't change slide yet
            }
        }
    }
    
    // If on Slide 4 (index 3 - Products & Services) and not on last product tab, advance product tab instead
    if (currentSlide === 3) {
        const activeBtn = document.querySelector('.product-menu-btn.active');
        if (activeBtn) {
            const nextBtn = activeBtn.nextElementSibling;
            if (nextBtn && nextBtn.classList.contains('product-menu-btn')) {
                nextBtn.click();
                return; // Intercept: don't change slide yet
            }
        }
    }
    
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    // If on Slide 3 (index 2 - History) and not on first chapter, go back timeline chapter instead
    if (currentSlide === 2) {
        const activeBtn = document.querySelector('.timeline-btn.active');
        if (activeBtn) {
            const prevBtn = activeBtn.previousElementSibling;
            if (prevBtn && prevBtn.classList.contains('timeline-btn')) {
                prevBtn.click();
                return; // Intercept: don't change slide yet
            }
        }
    }
    
    // If on Slide 4 (index 3 - Products & Services) and not on first product tab, go back product tab instead
    if (currentSlide === 3) {
        const activeBtn = document.querySelector('.product-menu-btn.active');
        if (activeBtn) {
            const prevBtn = activeBtn.previousElementSibling;
            if (prevBtn && prevBtn.classList.contains('product-menu-btn')) {
                prevBtn.click();
                return; // Intercept: don't change slide yet
            }
        }
    }
    
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// Presenter Notes Update
function updatePresenterNotes() {
    notesContent.innerHTML = presenterNotes[currentSlide] || "No notes available for this slide.";
    
    // Update Next Slide Preview
    if (currentSlide < totalSlides - 1) {
        const nextTitleEl = slides[currentSlide + 1].querySelector('.slide-title');
        if (nextTitleEl) {
            previewNextTitle.textContent = nextTitleEl.textContent.replace(/^\d+\.\s*/, '');
        } else {
            previewNextTitle.textContent = "Conclusion";
        }
    } else {
        previewNextTitle.textContent = "End of Presentation";
    }
}

// Presenter Stopwatch Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    secondsElapsed = 0;
    notesTimer.textContent = "00:00";
    
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
        notesTimer.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Toggle Presenter Mode Notes Sidebar
function togglePresenterNotes() {
    const isPresenterNotesActive = document.body.classList.toggle('presenter-mode');
    btnNotes.classList.toggle('active', isPresenterNotesActive);
    
    if (isPresenterNotesActive) {
        startTimer();
    } else {
        stopTimer();
    }
    
    // Resize delay to trigger CSS grid readjustments smoothly
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 300);
}

// Fullscreen API
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
        btnFullscreen.classList.add('active');
    } else {
        document.exitFullscreen();
        btnFullscreen.classList.remove('active');
    }
}

// Financial Charts SVG Height Animation
function animateFinancialCharts() {
    const bars = document.querySelectorAll('.chart-bar-inner');
    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        // Scale percentage to fit chart container max height (approx 85% of outer bar)
        let chartHeight = percentage;
        if (percentage > 80) chartHeight = 85; // cap visual representation nicely
        
        // Wait slightly for slide transition to finish before animating
        setTimeout(() => {
            bar.style.height = `${chartHeight}%`;
        }, 150);
    });
}

function resetFinancialCharts() {
    const bars = document.querySelectorAll('.chart-bar-inner');
    bars.forEach(bar => {
        bar.style.height = '0%';
    });
}

// Interactive Timeline
const timelineBtns = document.querySelectorAll('.timeline-btn');
const timelineDetails = document.querySelectorAll('.timeline-detail');

timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active Button
        timelineBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Toggle Active Detail
        const targetYear = btn.getAttribute('data-year');
        timelineDetails.forEach(detail => {
            detail.classList.remove('active');
            if (detail.id === `detail-${targetYear}`) {
                detail.classList.add('active');
            }
        });
    });
});

// Interactive Products Tab Menu
const productBtns = document.querySelectorAll('.product-menu-btn');
const productDetails = document.querySelectorAll('.product-details');

productBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active Product Tab Button
        productBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Toggle Active Product Detail Card
        const category = btn.getAttribute('data-category');
        productDetails.forEach(detail => {
            detail.classList.remove('active');
            if (detail.id === `prod-${category}`) {
                detail.classList.add('active');
            }
        });
    });
});

// Interactive Map Pins
const mapPins = document.querySelectorAll('.map-pin');
const hubTitle = document.getElementById('hub-title');
const hubRegion = document.getElementById('hub-region');
const hubFocus = document.getElementById('hub-focus');
const hubSig = document.getElementById('hub-sig');
const hubStaff = document.getElementById('hub-staff');

function updateHubPanel(hubKey) {
    const hub = hubData[hubKey];
    if (!hub) return;
    
    hubTitle.textContent = hub.title;
    hubRegion.textContent = hub.region;
    hubFocus.textContent = hub.focus;
    hubSig.textContent = hub.significance;
    hubStaff.textContent = hub.staff;
}

mapPins.forEach(pin => {
    pin.addEventListener('mouseenter', () => {
        const hubKey = pin.getAttribute('data-hub');
        updateHubPanel(hubKey);
        
        // Toggle visual active state on hover
        mapPins.forEach(p => {
            const dot = p.querySelector('.pin-dot');
            dot.style.backgroundColor = '';
            dot.style.borderColor = '';
        });
        const activeDot = pin.querySelector('.pin-dot');
        activeDot.style.backgroundColor = '#ffffff';
        activeDot.style.borderColor = 'var(--brand-red)';
    });
});

// Keyboard Listeners (Support clickers & standard key navigation)
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Spacebar
        case 'PageDown':
        case 'Enter':
            nextSlide();
            e.preventDefault();
            break;
            
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Backspace':
        case 'PageUp':
            prevSlide();
            e.preventDefault();
            break;
            
        case 'Home':
            goToSlide(0);
            e.preventDefault();
            break;
            
        case 'End':
            goToSlide(totalSlides - 1);
            e.preventDefault();
            break;
    }
});

// Button Controls
btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);
btnNotes.addEventListener('click', togglePresenterNotes);
btnFullscreen.addEventListener('click', toggleFullscreen);
btnPrint.addEventListener('click', () => {
    // Print friendly trigger
    window.print();
});

// Swipe Gestures for Mobile/Tablet Screens
let touchStartX = 0;
let touchEndX = 0;

window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50; // pixels
    if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide(); // Swipe Left -> Next Slide
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide(); // Swipe Right -> Prev Slide
    }
}

// Initial Notes Setup
updatePresenterNotes();
progressBar.style.width = `${(1 / totalSlides) * 100}%`;
