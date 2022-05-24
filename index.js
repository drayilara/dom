// Lets build toggle password functionality

const eye = document.querySelector("[class*='eye']");
const field = document.querySelector("[type]");


eye.addEventListener("click", toggleEye)

function toggleEye(){
    if(field.getAttribute("type") == "text"){
        field.setAttribute("type", "password");
    }else{
        field.setAttribute("type", "text");
    }
}