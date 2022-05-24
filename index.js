// Goal is to see element rect change dynamically on screen upon scrolling

// create a div
const ul = document.createElement("ul");

function getLiveRect(){
    // get Rect
    const rectObject = document.getElementById("target").getBoundingClientRect();

    // loop

    ul.innerHTML = "";  

    // remove ul elements to reset dynamically

    for(let c in rectObject){
        if(typeof rectObject[c] !== "function"){
            const li = document.createElement("li");
            li.textContent = `${c} : ${rectObject[ c ]}`
            ul.appendChild(li);
        }
    }

    document.body.appendChild(ul);

   
}

window.onscroll = function(){
        getLiveRect();
}