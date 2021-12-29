//document.getElementsByTagName("button");

/*https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes*/


//var button = document.getElementsByTagName("button")[0];

/*button.addEventListener("click", function() {
    console.log("CLICK!!!");
})*/

/*button.addEventListener("mouseenter", function() {
    console.log("CLICK!!!");
})*/

/*button.addEventListener("mouseleave", function() {
    console.log("CLICK!!!");
})*/

/*button.addEventListener("click", function() {
    console.log("click is working");
})*/

/*button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
})*/

/*button.addEventListener("click", function() {
    console.log(input.value);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})*/

/* input.addEventListener("keypress", function(event) {
    console.log(event);
     if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } 
}) */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var buttonDelete = document.querySelectorAll(".delete");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var buttonnew = document.createElement("button");
    var buttonDeletenew = document.getElementsByClassName("delete");
    buttonnew.innerHTML = "Delete";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(buttonnew);
    li.setAttribute("class", "delete");
    ul.appendChild(li);
    input.value = "";
    for(var i=0; i < list.length; i++) {
        list[i].addEventListener("click", listClick); 
        buttonDeletenew[i].querySelector("button").addEventListener("click", buttonDeleteB); 
    };
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    } 
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    } 
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i=0; i < list.length; i++) {
    list[i].addEventListener("click", listClick);
    buttonDelete[i].querySelector("button").addEventListener("click", buttonDeleteB); 
}

function listClick() {
    this.classList.toggle("done");
}

function buttonDeleteB() {
    this.closest(".delete").remove();
}

