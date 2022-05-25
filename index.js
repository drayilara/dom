
// collect them all
const boxes = document.querySelectorAll(".child");
const p = document.querySelector("p");

// add event to all

boxes.forEach(box => {
    box.onclick = function(){
        // collect individual boxes
        const topBox = document.querySelector(".top")
        const middleBox = document.querySelector(".middle")
        const bottomBox = document.querySelector(".bottom")

        this.classList.add("borderBottom");

        if(this.classList.contains("borderBottom")){
            switch(this){
                case topBox : middleBox.classList.remove("borderBottom");
                              bottomBox.classList.remove("borderBottom");
                              p.style["background-color"] = "green";
                break;

                case middleBox : topBox.classList.remove("borderBottom");
                                 bottomBox.classList.remove("borderBottom");
                                 p.style["background-color"] = "pink";
                break;

                case bottomBox : topBox.classList.remove("borderBottom");
                                 middleBox.classList.remove("borderBottom");
                                 p.style["background-color"] = "purple";
                break;
                     
            }

            // show the p
            p.classList.add("visible");
        }
    }
})