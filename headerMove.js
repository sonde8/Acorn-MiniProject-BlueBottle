var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $("header").outerHeight(); // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤 했다는 것을 알리는 부분
$(window).scroll(function(e){
  didScroll = true; 
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function(){
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  // 동작을 구현
  var st = $(this).scrollTop(); 

  if(Math.abs(lastScrollTop - st)<= delta)
    return;

  if(st > lastScrollTop && st > navbarHeight){
    $('header').removeClass('nav-down').addClass('nav-up');
  } else{
    if(st + $(window).height() < $(document).height()){
      $("header").removeClass("nav-up").addClass('nav-down')
    }
  }

  lastScrollTop = st;
}