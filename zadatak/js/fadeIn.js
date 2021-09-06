const faders = document.querySelectorAll('.fade-in');



const appearOptions = {
    thresholad: 0,
    rootMargin: "0px 0px -250px 0px"

}

const appearOnScroll = new IntersectionObserver
(function(
        enteries,
        appearOnScroll
    ){
        enteries.forEach(entery =>{
            if(!entery.isIntersecting){
                return;
            }else{
                entery.target.classList.add('appear');
                appearOnScroll.unobserve(entery.target);
            }
        });
    },
appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});

