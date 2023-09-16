//logo tansfert
const logo = document.getElementById("logo");
logo.addEventListener("click",() =>{
    window.location.href =  "./index.html"
})
// menu creation 
let menuBtn = document.createElement("img");
menuBtn.src = "../footage/images/menu.png";
menuBtn.style.width = "25px";
menuBtn.style.margin = "auto 5%";
menuBtn.style.display = "none";
const navbar = document.getElementById("navbar");
navbar.appendChild(menuBtn);
const navlist = document.querySelectorAll(".navlist");
function callMenu (){
    if(window.innerWidth <= 767){
        menuBtn.style.display = "block";
        navlist.forEach(el =>{
            el.style.display = "none"
            menuBtn.onclick = () => {
                if(el.style.display == "none"){
                    el.style.display = "block";
                    menuBtn.src = "../footage/images/minus.png"
                }
                else{
                    el.style.display = "none"
                    menuBtn.src = "../footage/images/menu.png"
                }
            }
        })
    }else{
        menuBtn.style.display = "none"
        navlist.forEach(el =>{
            el.style.display = "block"
            menuBtn.onclick = () =>{
                el.style.display = "none"
                menuBtn.scr = "../footage/images/menu.png"
            }
        })
    }
}
callMenu();
window.onresize =() =>{
    callMenu();
}