let active = document.querySelector('ul');
let btn1 = document.querySelector('#nav-btn')
let a = document.querySelector('#a')
btn1.addEventListener('click',()=>{
    active.classList.toggle('active')
})
let btn = document.getElementById('sun')
btn.addEventListener('click',()=>{
    let mood = document.getElementById('mood');
    btn.classList.toggle('fa-moon')
    if(btn.classList.toggle("fa-sun")){
        mood.href = './style.css';
    }
    else{
        mood.href = './white.css'
    }
})
a.addEventListener('click',()=>{
    for(let i = 0; i < active.length; i++){
        active[i].classList.toggle('active')
    }
    // active.forEach(()=>{
    //     active.classList.toggle('active')
    // })
})
