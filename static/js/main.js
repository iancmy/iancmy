document.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    const navHeight = parseInt(getComputedStyle(nav).getPropertyValue('height'));

    if (window.scrollY > navHeight) {
        nav.classList.add('opaque');
    } else {
        nav.classList.remove('opaque');
    }
})



