
const div = document.querySelector("div");
const p = document.querySelector("p");

div.addEventListener("contextmenu", function(e){
    e.preventDefault();
})

div.addEventListener("mousedown", function(e){
    let btn = e.button;

    if(btn == 0){
        p.textContent="You clicked with the left button";
    } 

    if(btn == 2){
        p.textContent="You clicked using the right button";
    } 
})