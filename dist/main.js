"use strict";
document.title = "project-js-14";
let counter = document.getElementById("counterValue");
let negative = document.getElementById("negative");
let reset = document.getElementById("reset");
let positive = document.getElementById("positive");
let num = "0";
negative.onclick = function (params) {
    counter.innerHTML = num--;
};
reset.onclick = function (params) {
    counter.innerHTML = num = 0;
};
positive.onclick = function (params) {
    counter.innerHTML = num++;
};
