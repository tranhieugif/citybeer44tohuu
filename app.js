$(document).ready(function () {
    $(".food-menu-list").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        prevArrow: `<button type='button' class='slick-prev slick-arrow ti-angle-left'></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow ti-angle-right'></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};
let getNav = function () {
    if (screen.width <= 991) {
        return "nav-mobile";
    } else return "navbar";
};

// Get the navbar
var navbar = document.getElementById(getNav());

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
$(window).load(function () {
    $("body").removeClass("preload");
});
const pcNav = document.querySelector(".nav-links");
const mobileNav = document.querySelector(".mobile-links");

// Copy from PC nav -> Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;
