const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }   
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();

window.onload = function() {

    function images(){
        const highlight = document.querySelector(".gallery-highlight");
        const previews = document.querySelectorAll(".trip-preview img");
    
        previews.forEach(preview => {
            preview.addEventListener("click", function() {
                const smallSrc = this.src;
                const bigSrc = smallSrc.replace("small", "big");
                highlight.src = bigSrc;
                previews.forEach(preview => preview.classList.remove("room-active"));
                preview.classList.add("gallery-active");
            });
        });
    }
    
    images();   

};
