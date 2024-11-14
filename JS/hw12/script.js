let currentImageIndex = 0;
let intervalId;
let remainingTime = 10;  
const images = document.querySelectorAll('.image-to-show');
const stopButton = document.getElementById('stop-button');
const resumeButton = document.getElementById('resume-button');
const timerElement = document.getElementById('timer');


function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}


function updateTimer() {
  timerElement.textContent = `Оставшееся время: ${remainingTime}`;
}


function startSlideshow() {
  
  showImage(currentImageIndex);
  updateTimer();  

  
  intervalId = setInterval(() => {
    remainingTime--;  

    updateTimer();    

    
    if (remainingTime <= 0) {
      remainingTime = 10;  
      currentImageIndex = (currentImageIndex + 1) % images.length;  
      showImage(currentImageIndex);
    }
  }, 1000); 

  
  stopButton.disabled = false;
  resumeButton.disabled = true;
}


stopButton.addEventListener('click', () => {
  clearInterval(intervalId);  
  stopButton.disabled = true;
  resumeButton.disabled = false;
});


resumeButton.addEventListener('click', () => {
  startSlideshow();  
  stopButton.disabled = false;
  resumeButton.disabled = true;
});


startSlideshow();
