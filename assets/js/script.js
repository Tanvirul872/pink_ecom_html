'use strict' ; 

//modal variables
const modal = document.querySelector('[data-modal]') ; 
const modalCloseBtn = document.querySelector('[data-modal-close]') ; 
const modalCloseOverlay = document.querySelector('[data-modal-overlay]') ;  

//modal function 
const modalCloseFunc = function () {
    // alert('hello') ; 
    modal.classList.add('closed')

} 

modalCloseOverlay.addEventListener('click',modalCloseFunc) ; 
modalCloseBtn.addEventListener('click',modalCloseFunc) ; 