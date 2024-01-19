//헤더, 푸더 로드
$("header").load("/components/header.html");
$("footer").load("/components/footer.html");

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
