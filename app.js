const section4 = document.getElementById("section4");
const section4Para1 = document.querySelector(".section4Para1");
const line1 = document.getElementById("line1");
const sec4BottomPara = document.querySelector(".sec4BottomPara");
const sec4Para = document.querySelector(".sec4Para");
const section4BottomSpan2 =
 document.querySelector(".section4BottomSpan2");
 const spanS1 = document.querySelector(".spanS1");
const navLine1 = document.querySelector(".nav-line1");
const navLine2 = document.querySelector(".nav-line2");
//const changeNavLine1 = document.querySelector(".change-nav-line1");
//const changeNavLine2 = document.querySelector(".change-nav-line2");
const hamMenuSpan = document.querySelector(".hamMenuSpan");
const hamMenu = document.querySelector(".hamMenu");
const divLeftHome = document.querySelector(".divLeftHome");
const section1 = document.querySelector(".section1");
const diamond1 = document.querySelector(".diamond1")
let sectionsArray = document.querySelectorAll(".section");
const diamondFont = document.querySelector(".diamondFont");
const section = document.querySelector(".section");

let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let sec4 = document.querySelector(".sec4");
let sec5 = document.querySelector(".sec5");
let sec6 = document.querySelector(".sec6");


let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");
let d4 = document.querySelector(".d4");
let d5 = document.querySelector(".d5");
let d6 = document.querySelector(".d6");

//add class for animation: 
section4.addEventListener("mouseenter",()=>{
    line1.classList.add("lineAnimationCSS");
    section4Para1.classList.add("section4Para1AnimationCSS");
    sec4Para.classList.add("sec4ParaChange");
    sec4BottomPara.classList.add("sec4BottomParaChange");
   
});
sec4BottomPara.addEventListener("mouseover",()=>{

    spanS1.classList.add("bgChange1");
}); 

//change CSS on Diamond when we scroll on Sections:
/*section1.addEventListener("mouseover",()=>{
    diamond1.classList.add("changeSectionCSS");
} )*/




//change BG Color while Scrolling Section: 
/*const section = document.querySelector(".section");
let sectionArray = [];
sectionArray.push(section);

let cubeClass = document.querySelector(".diamondFont");
let cubeClassArray = [];
cubeClassArray.push(cubeClass);
*/

hamMenuSpan.addEventListener("click",()=>{
    navLine1.classList.toggle("change-nav-line1");
    navLine2.classList.toggle("change-nav-line2");
    hamMenu.classList.toggle("showBigScreenSideMenu");
    divLeftHome.classList.toggle("hideDiamondFont");


});

//change CSS of Diamond fonts when mouse-over/ mouseLeave

//SECTION 1
sec1.addEventListener("mouseover",()=>{
    d1.classList.add("changeDiamondCSS1");
    d1.style.display = "block";
});
sec1.addEventListener("mouseleave",()=>{
    d1.classList.remove("changeDiamondCSS1");
});

//SECTION 2
sec2.addEventListener("mouseover",()=>{
    d2.classList.add("changeDiamondCSS1");
    d2.style.display = "block";
});
sec2.addEventListener("mouseleave",()=>{
    d2.classList.remove("changeDiamondCSS1");
});

//SECTION 3
sec3.addEventListener("mouseover",()=>{
    d3.classList.add("changeDiamondCSS1");
    d3.style.display = "block";
});
sec3.addEventListener("mouseleave",()=>{
    d3.classList.remove("changeDiamondCSS1");
});

//SECTION 4
sec4.addEventListener("mouseover",()=>{
    d4.classList.add("changeDiamondCSS1");
    d4.style.display = "block";
});
sec4.addEventListener("mouseleave",()=>{
    d4.classList.remove("changeDiamondCSS1");
});

//SECTION 5
sec5.addEventListener("mouseover",()=>{
    d5.classList.add("changeDiamondCSS1");
    d5.style.display = "block";
});
sec5.addEventListener("mouseleave",()=>{
    d5.classList.remove("changeDiamondCSS1");
});

//SECTION 6
sec6.addEventListener("mouseover",()=>{
    d6.classList.add("changeDiamondCSS1");
    d6.style.display = "block";
});
sec6.addEventListener("mouseleave",()=>{
    d6.classList.remove("changeDiamondCSS1");
});

