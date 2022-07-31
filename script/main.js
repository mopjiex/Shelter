let burgerWands = document.querySelector('.burger__wands');
let menuBurgerList = document.querySelector('.menu__burger-list');

let burgerWand = document.querySelectorAll('.burger__wand');


burgerWands.addEventListener('click', () => {
    burgerWand.forEach((elem) => {
        elem.classList.toggle('active');
    })

    menuBurgerList.classList.toggle('dn');
})