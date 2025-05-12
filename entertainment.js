// script.js
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden');
}

function bookAppointment() {
  const time = document.getElementById('spaTime').value;
  if (time) {
    // Save time to localStorage in HH:MM format
    localStorage.setItem('scheduledTime', time);
    // Redirect to the appointment page
    window.location.href = 'appointment.html';
  } else {
    alert('Please select a time before booking.');
  }
}


function showTourButton() {
  const option = document.getElementById('tourOptions').value;
  const btn = document.getElementById('bookTourBtn');
  btn.classList.toggle('hidden', option === '');
}

function bookTour() {
  const tour = document.getElementById('tourOptions').value;
  if (tour) {
    localStorage.setItem('bookedTour', tour); // Save to localStorage
    location.href = 'tour.html'; // Redirect to tour success page
  }
}


let currentNumber = '';

function pressKey(num) {
  currentNumber += num;
  document.getElementById('display').innerText = currentNumber;
}

function clearKeypad() {
  currentNumber = '';
  document.getElementById('display').innerText = '0';
}
