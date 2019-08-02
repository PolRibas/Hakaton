'use strict';

const main = () => {
    
    const title = document.querySelector('.title-one');
    const menu = document.querySelector('.menu');
    const contane = document.querySelector('.principal-menu')
    menu.addEventListener('click', (event) => {
        console.log(event)
        setTimeout(() =>{
            title.classList.toggle('display-none')
        }, 200)
    })
    const sale = document.querySelector('#sale');
    sale.addEventListener('click', (event) => {
        
    })
}
window.addEventListener('load', main)