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

