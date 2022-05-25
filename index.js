
const input = document.querySelector("input");
const logger = document.querySelector("p");

input.onchange = function(){
    logger.textContent = this.value;
}





