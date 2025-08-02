document.addEventListener('DOMContentLoaded', () => {
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

    const pageTransitionOverlay = document.getElementById('page-transition-overlay');
    const pageContent = document.querySelector('.page-content');

    if (pageTransitionOverlay && pageContent) {
        pageTransitionOverlay.classList.remove('crumble');
        setTimeout(() => {
            pageContent.classList.add('revealed');
        }, 300);
    }

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href.startsWith('#') || link.target === '_blank') return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            pageTransitionOverlay.classList.add('crumble');
            pageTransitionOverlay.offsetWidth;
            setTimeout(() => {
                window.location.href = this.href;
            }, 700);
        });
    });
});
