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
// handle customer review slider
$(document).ready(function () {
    $(".customer-reviews .feedback-body").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: `<button type='button' class='slick-prev slick-arrow ti-angle-left'></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow ti-angle-right'></button>`,
    });
});
// Lightbox gallery
$(document).ready(function () {
    $(".img-album").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find("img");
            },
        },
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
