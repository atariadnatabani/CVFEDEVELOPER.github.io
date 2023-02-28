const checkbtn = document.querySelector(".checkbtn");
const menu = document.querySelector(".menu");

checkbtn.addEventListener("click", () => {
    checkbtn.classList.toggle("active");
    menu.classList.toggle("active"); 
})


