var typed=new Typed(".statictext",{
    strings:["Junior Software Developer","UI/UX Designer","Front-End Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let sections = document.querySelectorAll('.container');
let navLinks = document.querySelectorAll('nav .nav2 a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top< offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('nav nav2 a [href*=' + id + ']').classList.add('active');

            });
        };
    });
};

