var fabars = document.querySelector('i');
var navlink = document.querySelector('.nav-link');
fabars.addEventListener("click", function () {
    if (navlink.style.display === 'none') {
        navlink.style.display = 'flex';
    }
    else {
        navlink.style.display = 'none';
    }
});
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
nav1.addEventListener("click", function () {
    navlink.style.display = 'none';
});
nav2.addEventListener("click", function () {
    navlink.style.display = 'none';
});
nav3.addEventListener("click", function () {
    navlink.style.display = 'none';
});
nav4.addEventListener("click", function () {
    navlink.style.display = 'none';
});
