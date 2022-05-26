const password = document.querySelector("[type='password']");
const text = document.querySelector("[type='text']");

password.onfocus = function(){
        this.style["background-color"] = "yellow";
}

password.onblur = function(){
        this.style["background-color"] = "pink";
}
