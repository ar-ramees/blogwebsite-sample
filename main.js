let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
})

//with masonry
new Masonry("#posts .grid",{
    itemSelector :'.grid-item',
    gutter : 20
});

//Swiper library initialization
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },
    //responsive breakpoints
    breakpoints: {
        '@0': {
            slidesPerView: 2
        },
        // 888px
        880: {
            slidesPerView: 3
        },
        // 1110px
        1072: {
            slidesPerView: 4
        },
        // 1330px
        1272: {
            slidesPerView: 5
        }
    }
})

