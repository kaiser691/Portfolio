let menuClick = 0;
function menuToggle(){
    const menuButton = document.querySelector(".menu");
    const slideBar = document.querySelector(".slidebar");
    menuClick++;
    if(menuClick % 2 === 0){
      menuButton.style.transform = "scaleX(1)";
      menuClick = 0;
      slideBar.style.right = "-80%";
    }else{
      menuButton.style.transform = "scaleX(-1)";
      slideBar.style.right = "0";
    }
}
function closeSlideBar(){
    const menuButton = document.querySelector(".menu");
    const slideBar = document.querySelector(".slidebar");
    menuButton.style.transform = "scale(1)";
    slideBar.style.right = "-80%";
}