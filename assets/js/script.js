'use strict' ; 

//modal variables
const modal = document.querySelector('[data-modal]') ; 
const modalCloseBtn = document.querySelector('[data-modal-close]') ; 
const modalCloseOverlay = document.querySelector('[data-modal-overlay]') ;  

//modal function 
const modalCloseFunc = function () { 
    modal.classList.add('closed') 
} 

modalCloseOverlay.addEventListener('click',modalCloseFunc) ; 
modalCloseBtn.addEventListener('click',modalCloseFunc) ; 



// noitificaion toaster js start

const notificationToaster = document.querySelector('[data-toast]') ; 
const notificationToasterClose = document.querySelector('[data-toast-close]') ; 

//modal function 
const toasterCloseFunc = function () { 
    notificationToaster.classList.add('closed') 
} 

notificationToasterClose.addEventListener('click',toasterCloseFunc) ; 


// noitificaion toaster js end
