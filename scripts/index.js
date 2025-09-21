const icons = document.querySelectorAll('.tech-icon');
const iconContainer = document.querySelector('.intro-visual');

Array.from(icons).forEach(icon => 
{
    let randLeft = Math.random() * iconContainer.offsetWidth;
    let randTop = Math.random() * iconContainer.offsetHeight;

    icon.style.left = randLeft + 'px';
    icon.style.top = randTop + 'px';
});

