var backdrop=document.querySelector('.backdrop');

var modal=document.querySelector('.modal');

var modal_button_no=document.querySelector('.modal__action--negative');

var selectPlanButton=document.querySelectorAll('.plan button');

var toggleButton = document.querySelector('.toggle-button');

var mobileNav = document.querySelector('.mobile-nav');


var navCta=document.querySelector('.main-nav__item--cta');



const closeModal = ()=>{

    // modal.style.display='none';
    // backdrop.style.display='none';

    if(modal){
        modal.classList.remove('open');
       
    }
    backdrop.classList.remove('open');
    backdrop.style.display='none';
 
}


if(modal_button_no){
    modal_button_no.addEventListener('click', closeModal);
}


// navCta.addEventListener('click',()=>{
//     modal.classList.add('open');
//     backdrop.classList.add('open');
// })


selectPlanButton.forEach(i=>{
    i.addEventListener('click',()=>{
        // modal.style.display='block';
        // this.closeModal();

        // modal.className='open'; This will actually overwrite a complete class listing
        
        modal.classList.add('open');
        backdrop.classList.add('open');
       // closeModal();



    })
})




backdrop.addEventListener('click',()=>{
    
    mobileNav.style.display='none';
    backdrop.style.display='none';
   
});


toggleButton.addEventListener('click',()=>{
    mobileNav.style.display='block';
    backdrop.style.display='block';
})


//console.log(selectPlanButton)