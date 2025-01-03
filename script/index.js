var swiper = new Swiper('.gallery-center_inner ', {
    slidesPerView: 2,//보여지는 갤러리 수
    spaceBetween: 150,//갤러리 사이 간격
    centeredSlides: true,//센터모드
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
    },
    pagination: {//블릿 버튼
        el: '.gallery-center .swiper-pagination',
        clickable: true,
    },
});


// 흘러가는 슬라이드
$(function () {
    // 기본


    // 기본 반대
    $("#scroller2").simplyScroll({
        speed: 1,
        direction:'backwards',
    });
});

//갤러리 슬라이드
var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 20,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
    },
});