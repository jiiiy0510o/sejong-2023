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
  imgIndex = document.querySelector(`.imgBox > img:nth-child(${i})`);

  sliderMark = document.querySelector(`.slider > div:nth-child(${i})`);

  console.log(imgIndex);
  imgIndex.classList.add("showImg");
  sliderMark.classList.add("mark");
  i++;
  if (i > 4) {
    i = 1;
  }
}
showInterval();
setInterval(showInterval, 3000);
