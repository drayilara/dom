const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

form.onsubmit = function(e){
        const fname = fname.value;
        const lname = lname.value;

        // validation here                          //pass validation
        if(fname == "sodiq" && lname == "ayilara") form.submit();

        // fails validation
        else e.preventDefault();
}