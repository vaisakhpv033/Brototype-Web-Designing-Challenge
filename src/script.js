// Hero slider
const slides = document.querySelectorAll('#hero > div');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('opacity-100');    
  slides[current].classList.add('opacity-0');
  current = (current + 1) % slides.length;
  slides[current].classList.remove('opacity-0');
  slides[current].classList.add('opacity-100');
}, 5000);

// Real Stories data
const stories = [
  { text: "“I almost lost my life—but I found help in time.”", author: "— Alex, survivor" },
  { text: "“Recovery gave me back my family and dreams.”", author: "— Maria, in recovery" },
  { text: "“Seeing the stats shocked me into action.”", author: "— Jordan, advocate" }
];
let idx = 0;
const container = document.getElementById('story-container');
function showStory(i) {
  container.innerHTML = `
    <div class="p-8 text-center">
      <p class="italic text-lg text-foreground mb-4">"${stories[i].text}"</p>
      <p class="font-semibold text-primary">${stories[i].author}</p>
    </div>`;
}
document.getElementById('prevStory').onclick = () => { idx = (idx-1+stories.length)%stories.length; showStory(idx); };
document.getElementById('nextStory').onclick = () => { idx = (idx+1)%stories.length; showStory(idx); };
showStory(idx);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle mobile menu visibility
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuToggle.classList.toggle('text-violet-600'); // Add interactivity to the icon
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add hover effect to cards
  const cards = document.querySelectorAll('.hover\:shadow-2xl');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-105');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-105');
    });
  });

  // Add form submission interactivity
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for scheduling an appointment! Our team will contact you soon.');
    form.reset();
  });

  // Add fade-in effect on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Add a back-to-top button
  const backToTop = document.createElement('button');
  backToTop.innerText = '↑';
  backToTop.className = 'fixed bottom-6 right-6 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none';
  backToTop.style.display = 'none';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
});
