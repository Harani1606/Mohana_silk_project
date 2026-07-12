const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
const categoryBtn = document.querySelector(".category-btn");
const categoryList = document.querySelector(".category-list");

categoryBtn.addEventListener("click",()=>{
    categoryList.classList.toggle("active");
});

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;
let slideInterval;

function startAutoSlide() {

    slideInterval = setInterval(nextSlide, 5000);

}

function resetAutoSlide() {

    clearInterval(slideInterval);

    startAutoSlide();

}

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide(current);

}

document.querySelector(".next").onclick=()=>{

    nextSlide();
    resetAutoSlide();

};

document.querySelector(".prev").onclick=()=>{

    prevSlide();
    resetAutoSlide();
};

dots.forEach((dot,index)=>{

    dot.onclick=()=>{

        current=index;

        showSlide(current);

        resetAutoSlide();

    };

});

startAutoSlide();