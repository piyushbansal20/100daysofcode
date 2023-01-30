const circlePath = document.querySelector('#circle-path');
const percentageNumber = document.querySelector('#percentage-number');
const incrementButton = document.querySelector('#increment-button');
const decrementButton = document.querySelector('#dec-button');
let percentage = 0;

// Get saved percentage from local storage
const savedPercentage = localStorage.getItem('count');

// If there is a saved percentage, use it, otherwise use 0
if (savedPercentage) {
  percentage = parseInt(savedPercentage);
}

percentageNumber.innerHTML = percentage;
circlePath.style.strokeDasharray = `${percentage} 100`;

incrementButton.addEventListener('click', () => {
  percentage += 1;
  localStorage.setItem('count' , percentage);
  if (percentage > 100) {
    percentage = 100;
  }
  percentageNumber.innerHTML = percentage;
  circlePath.style.strokeDasharray = `${percentage} 100`;
});

decrementButton.addEventListener('click', () => {
  percentage -= 1;
  localStorage.setItem('count' , percentage);
  if (percentage < 0) {
    percentage = 0;
  }
  percentageNumber.innerHTML = percentage;
  circlePath.style.strokeDasharray = `${percentage} 100`;
});
