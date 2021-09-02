var backdrop=document.querySelector('.backdrop');

var modal=document.querySelector('.modal');

var modal_button_no=document.querySelector('.modal__action--negative');

var selectPlanButton=document.querySelectorAll('.plan button');

const closeModal = ()=>{

    modal.style.display='none';
    backdrop.style.display='none';
}


selectPlanButton.forEach(i=>{
    i.addEventListener('click',()=>{
        modal.style.display='block';
        backdrop.style.display='block'
    })
})


modal_button_no.addEventListener('click', closeModal);

backdrop.addEventListener('click',closeModal);


//console.log(selectPlanButton)