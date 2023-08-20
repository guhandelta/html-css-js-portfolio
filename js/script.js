/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active  ')
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute(id);
        
        if(top >= offset && top < offset + height){
            navLinks.classList.remove("active");
            document.querySelector('header nav a[href*='+id+']').classList.add('active'); 
        }
    })
    
    /*==================== sticky navbar ====================*/
    let header = document.querySelectorAll('header');
    
    header.classList.toggle('sticky', window.scrollY>100);


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active  ')
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    distance : "30px",
    duration : 200,
    reset: true,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer, Python Developer, YouTuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})