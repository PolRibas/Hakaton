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
    const titles = document.querySelectorAll('.main-category-desk')
    titles.forEach((title) => {
        title.addEventListener('click', (event)=>{
            console.log(event)
            //childs-categories-desk
        })
    })
}
window.addEventListener('load', main)