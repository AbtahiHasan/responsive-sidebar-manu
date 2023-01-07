// select navlinks 
let navlinks = document.querySelectorAll(".navlinks ul li");

navlinks.forEach(function(navlink){
    navlink.onclick = () => {
        document.querySelector(".navlinks ul li.active").classList.remove("active");
        navlink.classList.add("active");
    }
})
// select toogle icon or sidebar 
let toogleIcon = document.querySelector(".toogle-icon"),
    sideNav = document.querySelector(".side-nav");
    toogleIcon.onclick = () => {
        sideNav.classList.toggle("active");
    }