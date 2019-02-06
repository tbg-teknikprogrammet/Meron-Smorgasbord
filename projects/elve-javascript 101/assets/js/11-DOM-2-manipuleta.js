// alert ("hello");

// select
var element = document.getElementById("highlight");

// manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.marginTop = "10px";
element.style.backgroundColor = "#aaa";

var ele = document.querySelector("h1");
ele.classList.add("some-class");


var p2 = document.getElementsByClassName("special")[1];
p2.classList.add("another-class");
// firstP.classList.remove("another-class");
// firstP.classList.toggle("another-class");