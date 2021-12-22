let colorWhite = '#FFFFFF';
let colorMenuText = '#D02060';
//open menu
document.getElementById("menu").addEventListener('click', () => {
  document.getElementById("sidenav").classList.toggle("show");

  gsap.to('#menu-icon', {
    x: -598,
    y: -20,
  })

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

  gsap.to('#menu-icon', {
    x: 0,
    y: 0,
  })

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
})

// blob
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