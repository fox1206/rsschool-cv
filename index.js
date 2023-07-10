// change tabs
const tabsContainer = document.querySelector(".about-me__tabs");
// console.log(tabsContainer);

aboutSection = document.querySelector(".main__about-me");
// console.log(aboutSection);

tabsContainer.addEventListener('click', (e) => {
  // console.log(e.target);
  if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");
    // console.log(target);

    aboutSection.querySelector(".content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});