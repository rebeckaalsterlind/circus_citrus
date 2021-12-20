//get warning in console
// gsap.to('#blob-small', {
//     fill: 'red',
// //     rotation: 360,
// //     x: 200,
// //     duration: 2
// });


document.getElementById("menu").addEventListener('click', () => {
  document.getElementById("sidenav").style.width = "1008px";
});


document.getElementById("close").addEventListener("click", () => {
  document.getElementById("sidenav").style.width = "0";
})