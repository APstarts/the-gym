
//slide animation
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide,5000);

//typewriter logic

const textElement = document.querySelector('.typewriter');
const phrases = [
    "We aren't here to make you comfortable.",
    "We are here to make you capable.",
    "Iron Haven is the home of high performance.",
    "Forge your body. Master your mind."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type(){
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting){
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex --;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex ++;
        typeSpeed = 100;
    }

    if(!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0){
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type,typeSpeed);
}

window.onload = () => {
    type();
}

//smooth scroll
document.querySelectorAll('nav ul li').forEach((li) => {
    li.addEventListener('click', () => {
        const targetId = li.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId);

        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            })
        }
    })
})


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#gallery",
        start: "top top",
        end: "+=150% top", // Length of the scroll animation
        scrub: true,       // Smoothly links animation to scroll
        pin: true,         // Stops the page from moving while animating
        anticipatePin: 1
    }
});

tl.to(".gallery-hero", {
    scale: 0.1,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
})
.to(".gallery-container", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out"
}, "<"); // "<" starts this at the same time as the hero animation