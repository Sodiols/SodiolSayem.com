const openUl = document.querySelector('#open');
const closeUl = document.querySelector('#close');
const navBar = document.querySelector('#navBar');
const navLinks = document.querySelector('.nav-links'),
navLinks2 = document.querySelector('.nav-links2'),
navLinks3 = document.querySelector('.nav-links3'),
navLinks4 = document.querySelector('.nav-links4');
openUl.addEventListener('click', () => {
    navBar.style.display = 'block';
    closeUl.style.display = 'block';
    openUl.style.display = 'none';
});

closeUl.addEventListener('click', () => {
    navBar.style.display = 'none';
    closeUl.style.display = 'none';
    openUl.style.display = 'block';
});

navLinks.addEventListener('click', () => {
    navLinks.style.textDecoration = 'underline';
    navLinks2.style.textDecoration = 'none';
    navLinks3.style.textDecoration = 'none';
    navLinks4.style.textDecoration = 'none';
});
navLinks2.addEventListener('click', () => {
    navLinks2.style.textDecoration = 'underline';
    navLinks.style.textDecoration = 'none';
    navLinks3.style.textDecoration = 'none';
    navLinks4.style.textDecoration = 'none';
});
navLinks3.addEventListener('click', () => {
    navLinks3.style.textDecoration = 'underline';
    navLinks2.style.textDecoration = 'none';
    navLinks.style.textDecoration = 'none';
    navLinks4.style.textDecoration = 'none';
});
navLinks4.addEventListener('click', () => {
    navLinks4.style.textDecoration = 'underline';
    navLinks2.style.textDecoration = 'none';
    navLinks3.style.textDecoration = 'none';
    navLinks.style.textDecoration = 'none';
})