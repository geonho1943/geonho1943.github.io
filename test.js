const button1 = document.getElementById("button1");
const section1 = document.getElementById("section1");

button1.addEventListener("click", function () {
  window.scrollBy({
    top: section1.getBoundingClientRect().top,

    behavior: "smooth",
  });
  // console.log("스크롤 이동");
});
