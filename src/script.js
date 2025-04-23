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
