// collect all the radios

const radios = document.getElementsByName("rate");

// add an event listener 
radios.forEach(radio => {
    radio.onclick = function(){
        const radioValue = radio.value;
        document.getElementById("btnRate").onclick = function(){
        document.getElementById("output").innerText = radioValue;
        }
    }
})


// const submit = document.getElementById("btnRate");

// submit.onclick = function(){
//     const rates = document.getElementsByName("rate");

//     rates.forEach(rate => {
//         if(rate.checked)
//         document.getElementById("output").innerText = `You selected ${rate.value}`;
//     })
// }