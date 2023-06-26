const aboutMe = document.getElementById("aboutMe");
const aboutMe1 = document.getElementById("aboutMe1");

const experience = document.getElementById("experience");
const experience1 = document.getElementById("experience1");

const project = document.getElementById("project");
const project1 = document.getElementById("project1");

const award = document.getElementById("award");
const award1 = document.getElementById("award1");

const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact1");

aboutMe.addEventListener("click", function () {
  window.scrollBy({
    top: aboutMe1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

experience.addEventListener("click", function () {
  window.scrollBy({
    top: experience1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

project.addEventListener("click", function () {
  window.scrollBy({
    top: project1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

award.addEventListener("click", function () {
  window.scrollBy({
    top: award1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
contact.addEventListener("click", function () {
  window.scrollBy({
    top: contact1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
