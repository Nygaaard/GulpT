"use strict";

let openEl = document.getElementById("open");
let closeEl = document.getElementById("close");
let hiddenEl = document.getElementById("hidden");

openEl.addEventListener("click", function(){
    hiddenEl.style.display = "flex";
})

closeEl.addEventListener("click", function(){
    hiddenEl.style.display = "none";
})

