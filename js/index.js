//헤더네비
let headerNav = document.querySelectorAll("header ul > li > a");
let showNav = document.querySelector(".showNav");
for (let i = 0; i < headerNav.length; i++) {
  let showIndex;
  headerNav[i].addEventListener("mouseenter", function () {
    showIndex = document.querySelector(`.showNav > li:nth-child(${i + 1})`);
    showIndex.classList.add("active");
  });
  showNav.addEventListener("mouseleave", function () {
    showIndex.classList.remove("active");
  });
}

// 메인 슬라이드 작동
let imgIndex;
let sliderMark;
let i = 1;
let slideInterval;

function showInterval() {
  // 현재 이미지와 슬라이더 마크에서 클래스 제거
  imgIndex = document.querySelector(`.imgBox > img.showImg`);
  sliderMark = document.querySelector(`.slider > div.mark`);
  imgIndex.classList.remove("showImg");
  sliderMark.classList.remove("mark");

  i++;

  if (i > 3) {
    i = 1;
  }

  // i 값에 따라 새로운 imgIndex와 sliderMark 설정
  imgIndex = document.querySelector(`.imgBox > img:nth-child(${i})`);
  sliderMark = document.querySelector(`.slider > div:nth-child(${i})`);

  // 새 이미지와 슬라이더 마크에 클래스 추가
  imgIndex.classList.add("showImg");
  sliderMark.classList.add("mark");
}

slideInterval = setInterval(showInterval, 3000);

//슬라이드 정지버튼 누를시
let stopBtn = document.querySelector(".slider > div:last-child");
let stopToggle = true;

stopBtn.addEventListener("click", function () {
  //슬라이드 정지
  if (stopToggle) {
    stopBtn.innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
    clearInterval(slideInterval);
    stopToggle = false;

    //슬라이드 재할당
  } else {
    stopBtn.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`;
    slideInterval = setInterval(showInterval, 3000);
    stopToggle = true;
  }
});

// TOP버튼 클릭시 상단 이동, fixBar 이동
let topBtn = document.querySelector(".topBtn");
let fixBar = document.querySelector(".fixBar");

topBtn.addEventListener("click", () => {
  //동작을 부드럽게
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", (e) => {
  let scrollY = this.scrollY;
  let bodyHeight = document.querySelector("body").scrollHeight;
  if (scrollY > 100) {
    topBtn.style.bottom = "40%";
    topBtn.style.transition = "bottom 0.5s ease-out";
  } else {
    // 스크롤 위치가 100 이하일 경우 TOP 버튼 숨김
    topBtn.style.bottom = "-100px";
    topBtn.style.transition = "bottom 0.5s ease-out";
  }

  //스크롤에 따라 fixBar 높이 이동
  if (scrollY < 200) {
    fixBar.style.top = "100px";
    //하단 스크롤 고정
  } else if (scrollY >= 200 && scrollY <= 2200) {
    fixBar.style.top = scrollY + 20 + "px";
    fixBar.style.transition = "top 0.2s ease-out";
  }
});

//리사이즈 될 경우 fixBar 오른쪽으로 이동
let widthSize = window.innerWidth;
let leftPosition = fixBar.offsetLeft;

window.addEventListener("resize", function () {
  if (widthSize > 1300) {
    fixBar.style.left = leftPosition + (widthSize - window.innerWidth) + "px";
  } else if (widthSize <= 1300 && widthSize < 1920) {
    // 1300 이하이면, left 속성 초기화
    fixBar.style.left = "";
  }
});

//날씨정보받아서 아이콘으로 변경
const API_KEY = "257f4e6c8fc561a25d61cb3c90b41002";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather span");
      let sky = data.weather[0].main;
      //날씨별로 ICON변경
      if (sky == "Clouds") {
        weather.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      } else if (sky == "Wind") {
        weather.innerHTML = `<i class="fa-solid fa-wind"></i>`;
      } else if (sky == "Clear") {
        weather.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      } else if (sky == "Rain") {
        weather.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
      } else if (sky == "Snow") {
        weather.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
      }
    })
  );
}
//에러날시 경고창
function onGeoError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//miniSlide .dots div클릭시 동작
let dots = document.querySelectorAll(".dots div");
let miniImg = document.querySelectorAll(".miniSlide img");

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    let leftValue = -25 * index; //24.4에 패딩포함
    miniImg.forEach(function (img) {
      img.style.left = leftValue + "%";
    });

    dots.forEach(function (dot) {
      dot.style.backgroundColor = "#bbb"; // 모든 div의 색상 초기화
    });
    this.style.backgroundColor = "#555"; // 클릭시 색상 변경
  });
});

let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let placeWrap = document.querySelectorAll(".placeWrap .place");

leftBtn.addEventListener("click", function () {});

rightBtn.addEventListener("click", function () {});
