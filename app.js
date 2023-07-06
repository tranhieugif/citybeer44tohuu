$(document).ready(function () {
  $(".food-menu-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: `<button type='button' class='slick-prev slick-arrow ti-angle-left'></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow ti-angle-right'></button>`,
    dots: true,
  });
});
