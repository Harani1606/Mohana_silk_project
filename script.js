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