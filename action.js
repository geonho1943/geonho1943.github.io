const aboutMeLink = document.getElementById("aboutMeLink");
const aboutMe = document.getElementById("aboutMe");

const experienceLink = document.getElementById("experienceLink");
const experience = document.getElementById("experience");

const projectLink = document.getElementById("projectLink");
const project = document.getElementById("project");

const awardLink = document.getElementById("awardLink");
const award = document.getElementById("award");

const contactLink = document.getElementById("contactLink");
const contact = document.getElementById("contact");

aboutMeLink.addEventListener("click", function () {
  window.scrollBy({
    top: aboutMe1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

experienceLink.addEventListener("click", function () {
  window.scrollBy({
    top: experience.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

projectLink.addEventListener("click", function () {
  window.scrollBy({
    top: project.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

awardLink.addEventListener("click", function () {
  window.scrollBy({
    top: award.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
contactLink.addEventListener("click", function () {
  window.scrollBy({
    top: contact.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
