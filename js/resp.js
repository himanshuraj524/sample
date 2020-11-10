// selecting the classes to toggle.
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
search = document.querySelector(".search") ; 

//adding event listenser to the burder menu.
burger.addEventListener("click", ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-nav-resp');
    search.classList.toggle('v-nav-resp');
});