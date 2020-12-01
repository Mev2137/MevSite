document.getElementById("searchForm").onsubmit = (e) => {
	e.preventDefault();
	const linkEl = document.getElementById("query");
	let link = "https://www.google.com/search?q=";
	link += encodeURIComponent(linkEl.value);
	linkEl.value = "";
	window.open(link);
};

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
	"B",
	"BO",
	"BOO",
	"BOOB",
	"BOOBl",
	"BOOBle",
	"BOOBle -",
	"BOOBle - M",
	"BOOBle - Me",
	"BOOBle - Mev",
	"BOOBle - MevB",
	"BOOBle - MevBr",
	"BOOBle - MevBro",
	"BOOBle - MevBrow",
	"BOOBle - MevBrows",
	"BOOBle - MevBrowse",
	"BOOBle - MevBrowser",
	"uwu",
];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML =
		TitleText[x++ % TitleText.length];
}
