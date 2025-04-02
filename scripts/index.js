function pdf() {
  return window.location.href = "/sideEffect.pdf";
};

// let currentContainer = 1;

// window.addEventListener("wheel", (event) => {
//   if (event.deltaY > 0 && currentContainer === 1) {
//     document.getElementById("container1").classList.add("hidden");
//     document.getElementById("container2").classList.remove("hidden");
//     setTimeout(() => {
//       document.getElementById("container1").classList.add("none");
//       document.getElementById("container2").classList.remove("none");
//     }, 500);
//     currentContainer = 2;
//   } else if (event.deltaY < 0 && currentContainer === 2) {
//     document.getElementById("container2").classList.add("hidden");
//     document.getElementById("container1").classList.remove("hidden");
//     setTimeout(() => {
//       document.getElementById("container2").classList.add("none");
//       document.getElementById("container1").classList.remove("none");
//     }, 500);
//     currentContainer = 1;
//   }
// });
// let startY = 0;

// window.addEventListener("touchstart", (event) => {
//   startY = event.touches[0].clientY;
// });

// window.addEventListener("touchend", (event) => {
//   const endY = event.changedTouches[0].clientY;

//   if (startY > endY + 50 && currentContainer === 1) {
//     document.getElementById("container1").classList.add("hidden");
//     document.getElementById("container2").classList.remove("hidden");
//     setTimeout(() => {
//       document.getElementById("container1").classList.add("none");
//       document.getElementById("container2").classList.remove("none");
//     }, 500);
//     currentContainer = 2;
//   } else if (startY < endY - 50 && currentContainer === 2) {
//     document.getElementById("container2").classList.add("hidden");
//     document.getElementById("container1").classList.remove("hidden");
//     setTimeout(() => {
//       document.getElementById("container2").classList.add("none");
//       document.getElementById("container1").classList.remove("none");
//     }, 500);
//     currentContainer = 1;
//   }
// });
