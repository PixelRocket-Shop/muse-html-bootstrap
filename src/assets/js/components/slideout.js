(function() {
    
    const CSS_SLIDEOUT_ACTIVE_CLASS = 'slideout-active';

    const toggleBtns = document.querySelectorAll('.btn-toggle-slideout');
    const slideoutBg = document.querySelector('.slideout-bg');
    const slideoutMenuLinks = document.querySelectorAll('.slideout-navlink');

    function toggleSlideOut() {
        document.body.classList.toggle(CSS_SLIDEOUT_ACTIVE_CLASS);
    }

    function closeMenuAndScrollToSection(event) {
        event.preventDefault();

        const target = event.target && 
                        event.target.dataset && 
                        event.target.dataset.target ? 
                        event.target.dataset.target : false;
        if (target) {
            toggleSlideOut();
            setTimeout(() => {
                const destination = document.querySelector(target);
                if (destination) {
                    destination.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 2000);
        }
    }


    toggleBtns.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            toggleSlideOut();
        });
    });

    slideoutBg.addEventListener('click', function() {
        toggleSlideOut();
    });

    slideoutMenuLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            closeMenuAndScrollToSection(event);
        });
    });


})();