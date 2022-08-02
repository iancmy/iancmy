const animatedText = document.querySelectorAll('span.pop-text');

animatedText.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.classList.add('pop-text-active');
    });

    text.addEventListener('animationend', () => {
        text.classList.remove('pop-text-active');
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const recaptcha = document.querySelector('.g-recaptcha');
    recaptcha.setAttribute("data-theme", "dark");
});