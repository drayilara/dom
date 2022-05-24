// // Illustrate bubbling

// document.addEventListener("click", function(){
//     console.log("Root was triggered by a bubble");
// })

// document.documentElement.addEventListener("click", function(){
//     console.log("html was triggered by a bubble");
// })


// document.body.addEventListener("click", function(){
//     console.log("body was triggered by a bubble");
// })

// // const tests = document.querySelectorAll(".test");

// // tests.forEach(test => {
// //     test.addEventListener("click", function(){
// //         console.log("Siblings triggered");
// //     })
// // })

// document.querySelector("ul").onclick = function(){
//     console.log("container was triggered")
// }

// const target = document.getElementById("target");

// target.addEventListener("click", function(){
//     console.log("I triggered the bubble you have been seeing");
// })


// delegation

const p = document.querySelector("p");

console.log(p);

let counter = 0;

function setEvent(){
    for(let i = 0; i < 5; i++){
        ++counter;

        if(counter == 3){
            p.onclick = function(evt){
                console.log(evt)
            }
        }

        if(counter == 4){
            p.onclick = null;
        }
    }
}

setEvent();
