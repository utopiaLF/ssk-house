let menuBar = document.getElementById('menu-bar');
// let menuClose = document.getElementById('menuClose');
const menuBtn = document.getElementById('menuBtn');


menuBtn.addEventListener('click', ()=>{
    menuBar.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

let que = document.querySelectorAll('.que')
let ans = document.querySelectorAll('.answer')
let thatIcon = document.querySelectorAll('.downAngle');

for (let i = 0; i < ans.length; i++) {
    que[i].addEventListener('click', ()=>{
        ans[i].classList.toggle('active')
        thatIcon[i].classList.toggle('active')
    })
}