document.addEventListener('DOMContentLoaded', () => {
    // ===============================================================
    // MENU FUNCTIONALITY
    // ===============================================================
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (menuBtn && sideMenu && closeMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.add('open');
        });
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });
    }

    // ===============================================================
    // PAGE TRANSITION LOGIC
    // ===============================================================
    const pageTransitionOverlay = document.getElementById('page-transition-overlay');
    const pageContent = document.querySelector('.page-content');

    // On page load, the page content should be revealed
    setTimeout(() => {
        if (pageContent) {
            pageContent.classList.add('revealed');
        }
        if (pageTransitionOverlay) {
            pageTransitionOverlay.style.transition = 'none';
            pageTransitionOverlay.classList.remove('crumble');
            setTimeout(() => {
                pageTransitionOverlay.style.transition = 'clip-path 1.2s cubic-bezier(0.8, 0, 0.2, 1)';
            }, 10);
        }
    }, 100);

    // Add click event listeners to all internal links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href.startsWith('#') || link.target === '_blank' || href === '') {
            return;
        }

        link.addEventListener('click', function (e) {
            e.preventDefault();

            if (pageTransitionOverlay) {
                pageTransitionOverlay.classList.add('crumble');

                setTimeout(() => {
                    window.location.href = this.href;
                }, 1200);
            } else {
                window.location.href = this.href;
            }
        });
    });

    // ===============================================================
    // MASONRY SLIDER FUNCTIONALITY (for index.html)
    // ===============================================================
    document.querySelectorAll('.slider-container').forEach(container => {
        const images = container.querySelectorAll('.slider-image');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        if (images.length > 1) {
            setInterval(showNextImage, 3000);
        }
    });

    // ===============================================================
    // MASONRY FADE-IN ON SCROLL (for index.html)
    // ===============================================================
    const masonryItems = document.querySelectorAll('.masonry-item');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    masonryItems.forEach(item => {
        observer.observe(item);
    });
});
