// Html Title
document.title = "project-js-14";

// getElements && makeVariables
let counter:any = document.getElementById("counterValue") as HTMLElement;
let negative = document.getElementById("negative") as HTMLButtonElement;
let reset = document.getElementById("reset") as HTMLButtonElement;
let positive = document.getElementById("positive") as HTMLButtonElement;
let num:any = "0";

negative.onclick = function (params) {
    counter.innerHTML = num--;
}
reset.onclick = function (params) {
    counter.innerHTML = num = 0;
}
positive.onclick = function (params) {
    counter.innerHTML = num++;
}