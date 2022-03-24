let menuLink = document.querySelectorAll('.header-menu__link');
let headerMenu = document.querySelectorAll('.header-menu__element');

function changeClass(event) {
    event.preventDefault();
    for (i=0; i<menuLink.length; i++){
        menuLink[i].classList.remove('header-menu__link-active');
    }
   return event.target.classList.add('header-menu__link-active');
}


let abc = Array.from(headerMenu);

abc.forEach(
     (item) => {
        item.addEventListener('click', changeClass)
    }
)




// headerMenu.addEventListener(
//     'click',
//     changeClass
// )
//

