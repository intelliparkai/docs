const date = new Date();
const year = date.getFullYear();
const yearSpan = document.querySelector("#year");
yearSpan.innerText = year;


const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const title = document.querySelector("header h1");

if (screenWidth <= 425){
    title.innerHTML = "IntelliPark"
}