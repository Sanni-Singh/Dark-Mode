const container = document.querySelector('.container')
const h1 = document.querySelector('h1')
const day = document.querySelector('#day')
const night = document.querySelector('#night')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2');


night.addEventListener('click',()=>{
    container.style.backgroundColor = "black"
    h1.style.color ="white";
    box1.style.visibility='hidden'
    box2.style.visibility= "visible"
})

day.addEventListener('click',()=>{
    container.style.backgroundColor = "white"
    h1.style.color = "black"
    box1.style.visibility='visible'
    box2.style.visibility= "hidden"
})