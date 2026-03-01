
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