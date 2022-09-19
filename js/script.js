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
wt.addEventListener("mouseover",function(){
    tmp = -0 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
dsa.addEventListener("mouseover",function(){
    tmp = -1 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
sad.addEventListener("mouseover",function(){
    tmp = -2 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
stats.addEventListener("mouseover",function(){
    tmp = -3 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
java.addEventListener("mouseover",function(){
    tmp = -4 * 100;
    tmp = tmp.toString() + "%";
    wrap.style.left = tmp;
})
for(var b=0;b<5;b++){
    var tmp;
    btns[b].addEventListener("mouseover",function(v){
        for(var t=0;t<5;t++){
            btns[t].classList.remove("active");
        }
        this.classList.add("active");
    })
}

// for(var b=0;b<4;b++){
//     var tmp;
//     btns[b].addEventListener("click",function(b){
//         tmp = -b * 100;
//         tmp = tmp.toString() + "%";
//         wrap.style.left = tmp;
//     })
// }

var dot = document.querySelector(".dots");
// var count = 0;
// dot.textContent += ".";
// dot.addEventListener("mousedown",function(){
//     while(true){
//         count++;
//         dot.textContent += ".";
//         if(count == 3){
//             dot.textContent = "";
//         }
//     }
// })