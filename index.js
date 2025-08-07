// 텍스트 슬라이드
let text = [
  "5만원 이상 구매 시 로고 파우치 증정 (8/4 ~ 소진시까지)",
  "블루보틀 서울력 놀라 팝업 카페 오픈",
  "35,000원 이상 구매 시 무료 배송 (제주도 별도)"
]

let i = 1;
function next() {
  const textSlide = document.querySelector(".text-slide");
  textSlide.textContent = text[i];
  i++;

  if (i >= text.length) {
    i = 0;
  }

  textSlide.animate(
    [
      { transform: 'translateX(100%)', offset: 0 },
      { transform: 'translateX(0)', offset: 0.3 },
      { transform: 'translateX(0)', offset: 0.7 },
      { transform: 'translateX(-100%)', offset: 1 }
    ],
    {
      duration: 4500,
      easing: 'ease-in-out',
      fill: 'forwards'
    }
  );
};

function init() {
  document.querySelector(".text-slide").textContent = text[0]

  setInterval(next, 5000);
}

// 이미지 & 이미지 내부 텍스트 슬라이드
let photoList = [
  "./img/mainImg1.jpg",
  "./img/mainImg2.jpg",
  "./img/mainImg3.jpg"
];

let bannerTitle = [
  "한정 기간 혜택",
  "블루보틀 인스턴트 컬렉션",
  "여름을 위한 글라스"
];

let bannerScript = [
  "5만원 이상 구매 시 로고 파우치 증정",
  "언제 어디서나 간편하게 즐기는 커피 한 잔",
  "신제품 글라스 머그를 만나보세요"
];

let index = 0;

function changeImage() {
  const image = document.querySelector(".image");
  const banner_title = document.querySelector(".banner-title");
  const banner_script = document.querySelector(".banner-script");

  // 페이드 아웃
  image.classList.add("fade-out");

  setTimeout(() => {
    image.style.backgroundImage = `url(${photoList[index]})`;
    banner_title.textContent = bannerTitle[index];
    banner_script.textContent = bannerScript[index];
    image.style.backgroundPosition = "center";
    image.style.backgroundSize = "cover";
    // 페이드 인
    image.classList.remove("fade-out");
    updatePagination();
  }, 350);
}

function nextImg() {
  index++;

  if (index >= photoList.length) {
    index = 0;
  };
  changeImage();
};

function prevImg() {
  index--;

  if (index < 0) {
    index = photoList.length - 1;
  };
  changeImage();
};

function goToSlide(slideIndex) {
  index = slideIndex;
  changeImage();
};

function updatePagination() {
  const pageButtons = document.querySelectorAll(".page-btn");

  pageButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active")
    }
  })
}

updatePagination();

// 로그인 창 나오게 하는 함수
function loginPopUp() {
  const loginPopup = document.querySelector(".login-popup");
  const overlay = document.querySelector(".overlay-login");

  loginPopup.classList.add("active"); // 클래스명만, 변수명 통일
  overlay.classList.add("active")
}

function closeLogin() {
  const loginPopup = document.querySelector(".login-popup");
  const overlay = document.querySelector(".overlay-login");

  loginPopup.classList.remove("active"); // 클래스명만, 변수명 통일
  overlay.classList.remove("active")
};

// 쇼핑 창 나오게 하는 함수
function shoppingPopup() {
  const shoppingSlide = document.querySelector(".shopping-slide");
  const overlay = document.querySelector(".overlay-shopping");

  shoppingSlide.classList.add("active"); // shoppingPopup → shoppingSlide
  overlay.classList.add("active"); // 오버레이도 추가
  document.body.classList.add("no-scroll");
}

function closeShopping() {
  const shoppingSlide = document.querySelector(".shopping-slide");
  const overlay = document.querySelector(".overlay-shopping");

  shoppingSlide.classList.remove("active"); // shoppingPopup → shoppingSlide
  overlay.classList.remove("active"); // 오버레이도 추가
  document.body.classList.remove("no-scroll");
}