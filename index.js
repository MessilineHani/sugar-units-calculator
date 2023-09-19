const appBtn = document.getElementById("use-app");
appBtn.addEventListener("click", () =>{
    window.location.href = "./app/app.html"
});
// Scroll up button
const scrollBTN = document.getElementById("scroll-btn");
function show_hide_SB(){ // SB = Scroll button
    if(window.scrollY >= document.body.clientHeight / document.body.childElementCount){
        scrollBTN.style.display = "block";
        scrollBTN.onclick = () =>{
            window.scrollTo({
                top:0,
                left:0,
                behavior : "smooth"
            }) ;
        }
    }
    else{
        scrollBTN.style.display = "none";
    }
}
show_hide_SB();
window.addEventListener("scroll", show_hide_SB);
// Section 2 scroll animation
const section2 = document.querySelector(".section2");
const sec2AnimatedEl = document.querySelectorAll(".animate");
window.addEventListener("scroll", showAnimatedEl);
function showAnimatedEl(){
    const sec2position = section2.getBoundingClientRect();
sec2AnimatedEl.forEach(el =>{
    if(window.scrollY >= sec2position.top / 2.5 && window.scrollY < sec2position.bottom + window.scrollY ){
        el.classList.add("show");
    }else{
        el.classList.remove("show")
    }
})
}
showAnimatedEl();