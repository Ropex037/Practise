const counters = document.querySelectorAll('.counter');
const speed = 40;

counters.forEach(counter =>{
    const updateCount = () => {
        const target =+counter.getAttribute('data-bs-target');
        const count = +counter.innerHTML;

        const inc = target / speed;
        
        
        if(count < target){
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updateCount, 100);
        
        }else{
            counter.innerHTML = target;
        }
    }
    updateCount();
})