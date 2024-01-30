//헤더, 푸더 로드
$("header").load("/components/common/header.html");
$("footer").load("/components/common/footer.html");
$(".sideBtn").load("/components/common/sideBtn.html");

let selected = document.querySelector(".selected");
let ulList = document.querySelector(".select ul");
selected.addEventListener("mouseenter", function () {
  ulList.style.display = "block";
});
