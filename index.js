toggleFn();

function toggleAll(){
        const boxes = document.querySelectorAll("[type='checkbox']");

        for(let i = 0; i < boxes.length; i++){
                if(!boxes[i].checked){
                        boxes[i].checked = true;
                }else{
                        boxes[i].checked = false;
                }
        }
}

function toggleFn(){    
const btn = document.querySelector("button");
btn.onclick = toggleAll
}