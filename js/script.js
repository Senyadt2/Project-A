var section1 = document.querySelector("#section1");
var explore = document.querySelector(".explore");

var wt = document.querySelector(".wt");
var java = document.querySelector(".java");
var stats = document.querySelector(".stats");
var dsa = document.querySelector(".dsa");
var sad = document.querySelector(".sad");

var as = document.querySelectorAll(".ass-content");
var wrap = document.querySelector(".wrapper");

var btns = document.querySelectorAll(".btn");

wt.addEventListener("click",function(){
    tmp = -0 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
java.addEventListener("click",function(){
    tmp = -1 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
stats.addEventListener("click",function(){
    tmp = -2 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
dsa.addEventListener("click",function(){
    tmp = -3 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
sad.addEventListener("click",function(){
    tmp = -4 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
// for(var b=0;b<4;b++){
//     var tmp;
//     btns[b].addEventListener("click",function(){
//         tmp = -b * 100;
//         tmp = tmp.toString() + "%";
//         wrap.style.left = tmp;
//     })
// }