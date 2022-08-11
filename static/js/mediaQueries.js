const navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', () => {
    const nav = document.querySelector('.overlay-nav');
    const icon = navButton.querySelector('span');
    
    nav.classList.toggle('active');

    if(icon.innerHTML === 'menu') {
        icon.innerHTML = 'close';
    } else {
        icon.innerHTML = 'menu';
    }
});