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


/*==================== typed js ====================*/