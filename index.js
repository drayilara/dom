// lets set the script of html from here
const fragment = new DocumentFragment();

const languages = ["Spanish", "Yoruba", "English", "Japanese", "Mandarin"]

const list = document.getElementById("languages");

languages.forEach(language => {
    const li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
})

list.appendChild(fragment);