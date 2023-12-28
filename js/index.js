//헤더네비
let headerNav = document.querySelectorAll("header ul > li > a");

for (let i = 0; i < headerNav.length; i++) {
  let showIndex;
  headerNav[i].addEventListener("mouseenter", function () {
    showIndex = document.querySelector(`.showNav > li:nth-child(${i + 1})`);
    showIndex.classList.add("active");
  });
  headerNav[i].addEventListener("mouseleave", function () {
    showIndex.classList.remove("active");
  });
}

// 메인 슬라이드 작동
let imgIndex;
let sliderMark;
let i = 1;

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

  // i 값에 따라 새로운 imgIndex와 sliderMark를 설정합니다.
  imgIndex = document.querySelector(`.imgBox > img:nth-child(${i})`);
  sliderMark = document.querySelector(`.slider > div:nth-child(${i})`);

  // 새 이미지와 슬라이더 마크에클래스 추가
  imgIndex.classList.add("showImg");
  sliderMark.classList.add("mark");
}
showInterval();
setInterval(showInterval, 3000);

//TOP버튼 클릭시 상단 이동
let topBtn = document.querySelector(".topBtn");

topBtn.addEventListener("click", () => {
  //동작을 부드럽게
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", (e) => {
  let scrollY = this.scrollY;
  if (scrollY > 100) {
    topBtn.style.bottom = "40%";
    topBtn.style.transition = "bottom 0.5s ease-out";
  } else {
    // 스크롤 위치가 100 이하일 경우 TOP 버튼 숨김
    topBtn.style.bottom = "-100px";
    topBtn.style.transition = "bottom 0.5s ease-out";
  }
});
