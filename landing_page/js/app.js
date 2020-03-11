document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------- */
    /* ----- TOGGLE HEADER MENU ----- */
    /* ---------------------------------------------------- */

    const btn = document.querySelector('#btnToggle');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.toggle('menu-show');
        this.classList.toggle('btn-toggle--toggled');
    });

    /* ---------------------------------------------------- */
    /* ----- ANIMATION ----- */
    /* ---------------------------------------------------- */


    const ball = document.querySelector('.animation__img--1');
    const device = document.querySelector('.animation__img--2');
    const textSlide = document.querySelectorAll('.textSlide');

    gsap.set(textSlide, { xPercent: -50, yPercent: -50, visibility: 'visible' });
    gsap.set(ball, { scale: 1 });
    gsap.set(device, { duration: 1.5 });

    const distance = 500;
    const startDelay = 1;
    const repeatDelay = 2;
    const opacity = 1;
    const tl = gsap.timeline({ repeat: -1 })
        .from(ball, 2, { opacity: 0 })
        .to('.slideFirst.slideLeft', { opacity, x: -distance, repeat: 1, yoyo: true, repeatDelay: repeatDelay }, startDelay)
        .to('.slideFirst.slideRight', { opacity, x: distance, repeat: 1, yoyo: true, repeatDelay: repeatDelay }, '<')
        .to('.slideSecond.slideLeft', { opacity, x: -distance, repeat: 1, yoyo: true, repeatDelay: repeatDelay }, `+=${startDelay}`)
        .to('.slideSecond.slideRight', { opacity, x: distance, repeat: 1, yoyo: true, repeatDelay: repeatDelay }, '<')
        .to([ball, device], 1, { scale: 0.5 })
        .to(ball, 1, { y: '-=100' })
        .to(device, 1, { y: '-=200' })
        .to(device, 1, { visibility: 'visible', opacity: 1 })
});