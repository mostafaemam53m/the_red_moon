// global constant

const mov_up = document.querySelector(".mov-up");
let mov_up_icon = document.querySelector(".mov-up-icon");
let myscreen = window.screen.height;
let shuffl = document.querySelector(".shuffl ul");
let block_of_images = document.querySelectorAll(".block_of_images .row");
// start of scroll
console.log(mov_up_icon)

let start = 3596;
let end = 3865;
let start2 = 4180;
let end2 = 4297;
document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(myscreen);
    // to diplay and hidden mov up button

    if (window.scrollY > myscreen) {
        mov_up.style.display = "block";
    } else {
        mov_up.style.display = "none";


    }
    // to change color of icone to be diffrente from back groung color
    // if (window.scrollY >= start && window.scrollY <= end) {
    //     console.log("frist block ");
    //     mov_up_icon.style.color = "#19283f";

    // } else {
    //     mov_up_icon.style.color = "#ffc400";
    //     console.log("back to yalow color");

    // }
    // if (window.scrollY >= start2 && window.scrollY <= end2) {
    //     console.log("second block 2");
    //     mov_up_icon.style.color = "#19283f";

    // } else {
    //     mov_up_icon.style.color = " #ffc400 ";
    //     console.log("back to yalow color");

    // }
})
mov_up.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });

})

/////to move block of shuffl
let mytarget;
shuffl.addEventListener("click", (e) => {
    let chosen_el = e.target;
    document.querySelectorAll(".shuffl ul li").forEach((element) => {

            element.classList.remove("active");
            // console.log(chosen_el.firstChild.nodeValue);
            mytarget = chosen_el.firstChild.nodeValue;

        })
        // add class active when click on button
    chosen_el.className = "active";
    block_of_images.forEach((element) => {
        console.log(element.classList);
        // display section of image
        if (element.classList.contains(mytarget)) {
            // hidden section
            element.classList.remove("d-none");
            // display section
            element.classList.add("d-inline-flex");
        } else {
            if (element.classList.contains("d-inline-flex")) {
                element.classList.add("d-none");
                element.classList.remove("d-inline-flex");

            }
        }

    })

})