/* ================================
   Part 2: JavaScript Functions
================================ */

// Global variable
let animationCount = 0;

// Reusable function with parameter + return
function calculateTimesTriggered(count) {
  return `The animation has been triggered ${count} times.`;
}

// Function demonstrating local scope
function triggerBoxAnimation() {
  let box = document.querySelector('.box'); // local variable
  box.classList.add('bounce');

  // Remove animation class after it finishes so it can be reused
  setTimeout(() => box.classList.remove('bounce'), 1000);

  // Update global counter
  animationCount++;
  console.log(calculateTimesTriggered(animationCount));
}

/* ================================
   Part 3: Combine CSS + JS
================================ */

// Animate box on button click
document.getElementById('animateBtn').addEventListener('click', triggerBoxAnimation);

// Modal logic
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

function toggleModal(show) {
  if (show) {
    modal.classList.add('show');
  } else {
    modal.classList.remove('show');
  }
}

openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));
window.addEventListener('click', (e) => {
  if (e.target === modal) toggleModal(false);
});
