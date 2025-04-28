let que = document.querySelectorAll('.que')
let ans = document.querySelectorAll('.answer')

for (let i = 0; i < ans.length; i++) {
    que[i].addEventListener('click', ()=>{
        ans[i].classList.toggle('active')
    })
}