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

// promotion toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

//floating

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y:size,
    repeat:-1,
    yoyo: true,
    ease : Power1.easeInOut,
    delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scroll magic
const spyEls =document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook : .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});