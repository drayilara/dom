
const text = document.createTextNode("This is an image");
const heading = document.createElement("h1");
heading.appendChild(text);
document.body.appendChild(heading);

const image = document.createElement("img");
const src = document.createAttribute("src");

image.src = "https://cdn.shopify.com/s/files/1/0070/7032/files/AMgoal-setting_HEADER.jpg?v=1579623952&width=1024";

document.body.appendChild(image);


const parent = document.querySelector("div").firstElementChild.nodeValue

console.log(parent);