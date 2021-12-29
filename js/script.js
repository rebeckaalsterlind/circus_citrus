const colorWhite = '#FFFFFF';
const colorMenuText = '#D02060';

//open menu
document.getElementById("menu").addEventListener('click', () => {

  document.getElementById("sidenav").classList.add("show");
  document.getElementById("menu-icon").classList.add("menu-icon");

  //add tab index when menu is visible
  document.getElementById("tab1").tabIndex = "0";
  document.getElementById("tab2").tabIndex = "0";
  document.getElementById("tab3").tabIndex = "0";
  document.getElementById("close").tabIndex = "0";

  gsap.to('#menu-icon-text', {
    fill: colorMenuText,
    rotate: 45,
    x: 10,
    y: -70,
  });

  gsap.to('#menu-cross-left', {
    stroke: colorMenuText,
    rotate: -45,
    y: 36,
    x: -26,
  });

  //make one stroke of the cross invisible
  gsap.to('#menu-cross-right', {
    stroke: "none",
  });

});

//close menu
document.getElementById("close").addEventListener("click", () => {

  document.getElementById("sidenav").classList.remove("show");
  document.getElementById("menu-icon").classList.remove("menu-icon");

  //remove tab index when menu is not visible
  document.getElementById("tab1").tabIndex = "-1";
  document.getElementById("tab2").tabIndex = "-1";
  document.getElementById("tab3").tabIndex = "-1";
  document.getElementById("close").tabIndex = "-1";

  gsap.to('#menu-icon-text', {
    fill: colorWhite,
    rotate: 0,
    x: 0,
    y: 0,
  
  });

  gsap.to('#menu-cross-left', {
    stroke: colorWhite,
    rotate: 0,
    y: 0,
    x: 0,
  });

  gsap.to('#menu-cross-right', {
    stroke: colorWhite,
  });

});



// blob
const durationTime = 4;
const repeatVal = -1;
const repeatDelayVal = 1;

//change colors of blob elements:
gsap.to('#blob-small', {
  duration: durationTime,
  fill: '#CCD00E',
  repeat: repeatVal,
  repeatDelay: repeatDelayVal,
  yoyo: true,
});

gsap.to('#blob-medium', {
  duration: durationTime,
  fill: '#FBFF21',
  repeat: repeatVal,
  repeatDelay: repeatDelayVal,
  yoyo: true,
});

gsap.to('#blob-large', {
  duration: durationTime,
  fill: '#FFF065',
  repeat: repeatVal,
  repeatDelay: repeatDelayVal,
  yoyo: true,
});

//remove cookie bar
document.getElementById("btn-accept-cookies").addEventListener("click", () => {
  document.getElementById("cookies-bar").style.display= "none";
});