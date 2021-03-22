const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})

const badgeEl = document.querySelector("header .badges");
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY>500){
    // badge숨기기
    gsap.to(badgeEl, .6,{
      opacity:0,
      display:'none'
    })  
  }
  else{
    //badge보여주기
    gsap.to(badgeEl, .6,{
      opacity:1,
      display:'block'
    }) 
  }
},300))

// visual section fade in animation
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7, //요소마다 다른 딜레이를 줘서 순차적으로 나타나는 효과 구현
    opacity : 1
  });
});

// swiper slide
// notice-line slide
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});
//promotion slide
new Swiper('.promotion .swiper-container',{
  slidesPerView:3,
  spaceBetween :10,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination:{
    el:'.swiper-pagination',
    clickable : true
  },
  navigation:{
    prevEl :'.swiper-prev' ,
    nextEl: '.swiper-next'
  }
});