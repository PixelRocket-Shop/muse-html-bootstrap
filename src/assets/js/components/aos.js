import AOS from 'aos';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const options = {
      duration: 700,
      easing: 'ease-out-quad',
      once: true,
      mirror: false,
      startEvent: 'load',
      disable: 'mobile'
    };

    AOS.init(options);
  });
})();