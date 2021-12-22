

//menu
document.getElementById("menu").addEventListener('click', () => {
  document.getElementById("sidenav").style.width = "1008px";
});


document.getElementById("close").addEventListener("click", () => {
  document.getElementById("sidenav").style.width = "0";
})

// blob
let blobSmall = document.getElementById("blob-small");
let blobMedium = document.getElementById("blob-medium");
let blobLarge = document.getElementById("blob-large");

let durationTime = 4;
let repeatVal = -1;
let repeatDelayVal = 1;

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