const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const visitorKey = 'sudip-portfolio-visits';
const currentVisits = Number(localStorage.getItem(visitorKey) || 0) + 1;
localStorage.setItem(visitorKey, currentVisits);
document.getElementById('visitorCount').textContent = currentVisits;
// form redirect stop

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

const btn =
form.querySelector("button");

btn.innerHTML =
"Sending...";

});

}
