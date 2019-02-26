let burger = document.getElementById("burger"),
    nav = document.getElementById("mobile-menu");
burger.addEventListener('click',function(){
    burger.classList.toggle("active");
    nav.classList.toggle("adaptive-menu--active");
    nav.classList.toggle("adaptive-menu");
});