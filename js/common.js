//헤더, 푸더 로드
$("header").load("/components/common/header.html");
$("footer").load("/components/common/footer.html");
$(".sideBtn").load("/components/common/sideBtn.html");

let allSelect = document.querySelectorAll(".select");
let list = document.querySelectorAll(".select+ul li");

allSelect.forEach(function (select) {
  let ulList = select.querySelector("ul");
  let selected = select.querySelector(".selected");

  select.addEventListener("click", function () {
    allSelect.forEach(function (otherSelect) {
      let otherUlList = otherSelect.querySelector("ul");
      let otherSelected = otherSelect.querySelector(".selected");
      if (otherUlList !== ulList) {
        otherSelected.style.backgroundColor = "";
        otherSelected.style.color = "";
        otherUlList.style.display = "none";
      }
    });
    if (ulList.style.display === "block") {
      selected.style.backgroundColor = "";
      selected.style.color = "";
      ulList.style.display = "none";
    } else {
      selected.style.backgroundColor = "#028662";
      selected.style.color = "#fff";
      ulList.style.display = "block";
    }
    list.forEach(function (li) {
      li.addEventListener("click", function () {
        console.log("dd");
      });
    });
  });
});
