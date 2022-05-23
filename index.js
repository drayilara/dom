// Dynamically change input type upon clicking

const availableTypes = ["radio", "number", "password", "month", "button", "checkbox", "date", "color"];


const input = document.querySelector("[type]");

let index = 0;

input.onclick = function(){
    let currentType = availableTypes[index];
    this.type = currentType;
    ++index;

    this.dataset.field = currentType;

    if(index == (availableTypes.length-1)){
        index = 0;
    }

    console.log(this.dataset.field);
}




