
// window.onLoad = function(){
//     console.log(window);
//     var div = document.querySelector("div");
//     var p = document.querySelector("p");

//     var textNode = document.createTextNode("This is the text I wanted to change it to.");

//     //p.append(textNode); to add to paragraph
//     p.innerHTML = textNode.textContent; //to replace paragraph
// }

//Does the same thing as above

document.addEventListener("DOMContentLoaded", function(){
    loadCode();
})

function loadCode(){
    console.log(window);
    var div = document.querySelector("div");
    var p = document.querySelector("p");

    var textNode = document.createTextNode("This is the text I wanted to change it to.");

    //p.append(textNode); to add to paragraph
    p.innerHTML = textNode.textContent; //to replace paragraph
    div.removeChild(p); //removes the paragraph element completely
    div.appendChild(p); //adds the paragraph back
}