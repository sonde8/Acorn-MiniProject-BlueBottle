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

// 이미지 슬라이드 다음 버튼
function nextImg() {
  index++;

  if (index >= photoList.length) {
    index = 0;
  };
  changeImage();
};

// 이미지 슬라이드 이전 버튼
function prevImg() {
  index--;

  if (index < 0) {
    index = photoList.length - 1;
  };
  changeImage();
};

// 페이지 네이션 관련 함수
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

// 로그인 창 들어가게 하는 함수
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

  shoppingSlide.classList.add("active"); 
  overlay.classList.add("active"); 
  document.body.classList.add("no-scroll");
}

// 쇼핑 창 들어가게 하는 함수
function closeShopping() {
  const shoppingSlide = document.querySelector(".shopping-slide");
  const overlay = document.querySelector(".overlay-shopping");
  const detailSlide  = document.querySelector(".detail-slide");

  shoppingSlide.classList.remove("active"); 
  overlay.classList.remove("active");
  detailSlide.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// 쇼핑 세부 카테고리 
const categoryData = {
  coffee: {
      title: '커피',
      items: [
          { name: '모든 커피', link: '/블루보틀커피_ALL커피모음.html' },
          { name: '블렌드', link: '/블루보틀커피_블렌드.html' },
          { name: '싱글 오리진', link: '/블루보틀커피_싱글오리진.html' },
          { name: '인스턴트', link: '/블루보틀커피_인스턴트.html' },
          { name: '콜드브루', link: '/블루보틀커피_콜드브루.html' },
          { name: '휴먼 메이드', link: '/블루보틀커피_휴먼메이드.html' },
          { name: '세트', link: '/블루보틀커피_세트.html' }
      ]
  },
  tumbler: {
      title: '컵과 텀블러',
      items: [
          { name: '모든 컵과 텀블러', link: '/블루보틀_ALL컵모음.html' },
          { name: '텀블러', link: '/블루보틀_텀블러.html' },
          { name: '컵과 머그', link: '/블루보틀_컵과머그.html' },
          { name: '유리잔', link: '/블루보틀_유리잔.html' }
      ]
  },
  brewing: {
      title: '브루잉 도구',
      items: [
          { name: '모든 브루잉 도구', link: '/블루보틀브루밍도구_ALL도구모음.html' },
          { name: '브루잉 도구', link: '/블루보틀브루밍도구_브루잉도구.html' },
          { name: '액세서리', link: '/블루보틀루밍도구_브루잉액세서리.html' },
          { name: '필터', link: '/블루보틀브루밍도구_커피핕터.html' },
          { name: '그라인더', link: '/블루보틀브루밍도구_그라인더.html' }
      ]
  }
};

// 세부 카테고리 열기
function openDetailCategory(category) {
  const detailSlide = document.querySelector(".detail-slide");
  const detailTitle = document.getElementById("detail-title");
  const detailList = document.getElementById("detail-list");
  
  // 카테고리 데이터 가져오기
  const data = categoryData[category];
  
  // 제목 설정
  detailTitle.textContent = data.title;
  
  // 리스트 항목 생성
  detailList.innerHTML = '';
  data.items.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.name;
      a.href = item.link; // 실제 링크 설정
      
      li.appendChild(a);
      detailList.appendChild(li);
  });
  
  // 세부 슬라이드 열기
  detailSlide.classList.add("active");
}

// 세부 카테고리 닫기 (뒤로가기)
function closeDetailSlide() {
  const detailSlide = document.querySelector(".detail-slide");
  detailSlide.classList.remove("active");
}

