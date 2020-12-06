if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 800);
}

let x = 0;

const TitleText = [
  "M",
  "Me",
  "Mev",
  "Mev-",
  "Mev-S",
  "Mev-Si",
  "Mev-Sit",
  "Mev-Site",
  "<3",
];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    TitleText[x++ % TitleText.length];
}
