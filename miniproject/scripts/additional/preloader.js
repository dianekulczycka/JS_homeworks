const preloaderBlock = document.createElement("div");
preloaderBlock.id = "preloader";

const preloaderTextEl = document.createElement("h1");
preloaderTextEl.innerText = "Loading...";

preloaderBlock.appendChild(preloaderTextEl);

window.onload = function () {
    preloaderBlock.style.display = "none";
}

document.getElementById("main").appendChild(preloaderBlock);
