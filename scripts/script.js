/*
Kshitij Chaudhary
c0920457
*/

//Hamburger menu function
function hamburger() { 
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffb-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
