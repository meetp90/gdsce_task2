const menu =document.getElementById("menu-list");
const openList =document.getElementById("menu-btn");
const closeList =document.getElementById("close-btn");

openList.addEventListener("click",()=>{
    menu.classList.add("flex");
    menu.classList.remove("hidden");

})
closeList.addEventListener("click",()=>{
    menu.classList.add("hidden");
    menu.classList.remove("flex");

})
