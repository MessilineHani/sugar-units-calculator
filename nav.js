//logo tansfert
const logo = document.getElementById("logo");
logo.addEventListener("click",() =>{
    window.location.href =  "./index.html"
})
// menu creation 
let menuBtn = document.createElement("img");
menuBtn.src = "./footage/images/menu.png";
menuBtn.style.width = "25px";
menuBtn.style.margin = "auto 5%";
menuBtn.style.display = "none";
const navbar = document.getElementById("navbar");
navbar.appendChild(menuBtn);
function callMenu (){
    const navlist = document.querySelectorAll(".navlist");
    if(window.innerWidth <= 767){
        menuBtn.style.display = "block";
        navlist.forEach(el =>{
            el.style.display = "none"
        })
    }else{
        menuBtn.style.display = "none"
        navlist.forEach(el =>{
            el.style.display = "block"
        })
    }
}
callMenu();
window.onresize =() =>{
    callMenu();
}