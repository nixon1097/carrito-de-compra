function showMenu (){
    const nav= document.querySelector('.nav');
    const menu= document.querySelector('.nav__menu');

    nav.addEventListener('click',function(event){
        if(event.target.closest('.btn--menu')){
            menu.classList.toggle('show__menu')
        }
        if(event.target.closest('.btn-close')){
            menu.classList.remove('show__menu')
        }
        if(event.target.closest('.nav__link')){
            menu.classList.remove('show__menu') 
        }
    })

}
export default showMenu