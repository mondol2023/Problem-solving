const hamberger=document.querySelector('.hamberger');
const NavbarHide=document.querySelector('.Navbar-hide');
hamberger.addEventListener('click',()=> {
    NavbarHide.classList.toggle('hide');
});