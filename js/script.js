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

var menuButton = document.querySelector(".fa-bars");
var xButton = document.querySelector(".fa-x");
var menuBox = document.querySelector(".menu-box");
var login = document.querySelector(".fa-user");
var register = document.querySelector(".fa-address-book");
var formbox = document.querySelector(".form-box");
menuButton.addEventListener("click",function(){
    xButton.style.display = "block";
    menuBox.style.display = "block";
})
xButton.addEventListener("click",function(){
    xButton.style.display = "none";
    menuBox.style.display = "none";
})

login.addEventListener("click",function(){
    formbox.classList.add("form-show");
})
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register()
{
  x.style.left="-400px";
  y.style.left="50px";
  z.style.left="110px";

}
function login()
{
  x.style.left="50px";
  y.style.left="450px";
  z.style.left="0px";
}