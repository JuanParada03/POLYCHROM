const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const links = nav.querySelectorAll('a');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggle.classList.remove('open');
    });
});
