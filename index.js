

const input = document.querySelector("input");

input.onclick = function(){
    this.checked = true;
}

const p = document.querySelector("p");

// p.style.cssText += "color:red; background-color: yellow; font-size: 100px;";
// const inline = window.getComputedStyle(p);

p.style.cssText += "background-color: pink; font-size: 100px; font-weight: 100px";


