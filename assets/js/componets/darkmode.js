function darkmode(){
    const bntSwitch = document.querySelector('.switch__darkmode');
     
load()
    bntSwitch.addEventListener('click', function(){
        document.body.classList.toggle('dark')
        bntSwitch.classList.toggle('active')
     store(document.body.classList.contains('dark'))
    })
    function load (){
        const darkmode=localStorage.getItem('darkmode')
        if(!darkmode){
            store('false')
        }else if (darkmode =='true'){
               document.body.classList.add('dark')
         }

    }
    function store(value){
        localStorage.setItem('darkmode', value)
    }
   
}
 
   export default  darkmode