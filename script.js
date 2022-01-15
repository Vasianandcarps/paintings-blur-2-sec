window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
  }
};
// function question() {
//   let q = prompt("input name of painting");
//   let name = ["Mona Liza", "Girl with a Pearl Earring"];
//   for (let j = 0; j < name.length; j++) {
//     if (q == name[j]) {
//       alert("Right!");
//       return showAnswer();
//     } else {
//       // alert("Try again!");
//       return blurAnswer();
//     }
//   }
// }

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "img/" + name;
  setTimeout(blurAnswer, 2000, image);
}
function blurAnswer(image) {
  let name = image.id;
  name = name + "blur" + ".jpg";
  image.src = "img/" + name;
}

// function blurAnswer(image) {
//   let name = image.id;
//   name = name + "blur" + ".jpg";
//   image.src = "img/" + name;
// }
// function showAnswer(image) {
//   let name = image.id;
//   name = name + ".jpg";
//   image.src = "img/" + name;
// }
