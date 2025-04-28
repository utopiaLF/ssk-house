let que = document.querySelectorAll('.que')
let ans = document.querySelectorAll('.answer')
let thatIcon = document.querySelectorAll('.downAngle');

for (let i = 0; i < ans.length; i++) {
    que[i].addEventListener('click', ()=>{
        ans[i].classList.toggle('active')
        thatIcon[i].classList.toggle('active')
    })
}