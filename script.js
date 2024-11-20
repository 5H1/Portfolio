var typed=new Typed('#text',{
    strings:['Developer.','Trainee','Strategist'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});

//SHOW SKILLS
let skillBtn=document.querySelector('.skill_btn');
let skillDet=document.querySelector('.about_bottom');

skillBtn.addEventListener('click', () =>{
    skillDet.classList.toggle('show_skills');
});
//STICKY NAVIGATION 

//sticky nav 

let nav = document.querySelector('nav');
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 100 ){
        nav.classList.add('sticky_nav');
    }
    else
    {
        nav.classList.remove('sticky_nav');
    }

});

//FILTERS

var mixer=mixitup('.portfolio_images');


//BLOGS SWIPER SLIDER
var swiper = new Swiper('.blogSwiper',{
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
});