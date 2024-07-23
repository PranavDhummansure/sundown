const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation()