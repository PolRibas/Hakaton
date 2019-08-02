'use strict';

const main = () => {
    
    const title = document.querySelector('.title-one');
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        setTimeout(() =>{
            title.classList.toggle('display-none')
        }, 200)
    })


}
window.addEventListener('load', main)