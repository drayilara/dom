
const container = document.querySelector("#container")

// delegate event to children from parent

container.addEventListener("click", addClicker)



function addClicker(event){
    // stop propagation
        event.stopPropagation();
        
       const target = event.target
       target.classList.toggle("borderBottom")

    //    check if target has borderBottom before displaying p
        const hasBlueBorder = target.classList.contains("borderBottom");

    // grab p

        const p = document.querySelector("p");

        if(hasBlueBorder) p.classList.add("visible");
        else p.classList.remove("visible");
}
