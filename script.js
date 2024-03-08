
    let darkbtn =  document.querySelector('.darkMode');
    darkbtn.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="white";
    darkbtn.src="assets/Moon_fill.svg";
    darkbtn.style.backgroundColor= "white";
    darkbtn.style.borderRadius = "50%"
    let container = document.querySelector( '.container' );
    container.style.color = "white";
    document.querySelector('.hero-title').style.color="white";
    document.querySelector('.tagline').style.color="white";
    lightbtn.style.backgroundColor="black"
})
   
    let lightbtn = document.querySelector('.lightMode');
    lightbtn.addEventListener("click", () => {
    document.querySelector('body').style.backgroundColor= "#fafafa";
    let container = document.querySelector( '.container' );
    container.style.color = "black";
    document.querySelector('.hero-title').style.color="black";
    document.querySelector('.tagline').style.color="black"
    lightbtn.style.backgroundColor="white";
    darkbtn.style.backgroundColor= "transparent";
    
    
})

// timeline animation for the hero section
gsap.from(".container .logo,li,.dark-mode",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.1,
});
gsap.from(".left-container span,.hero-title,.hero-description",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:0.2
})
gsap.from(".right-container img",{
    x:400,
    duration:1,
    opacity:0,
})




  