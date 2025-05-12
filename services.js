function toggleSelection(card) {
    card.classList.toggle('selected');
  }
  
  function confirmBooking() {
    const selectedServices = document.querySelectorAll('.service-card.selected');
    if (selectedServices.length === 0) {
      alert('Please select at least one service!');
    } else {
      window.location.href = "services_confirmation.html";
    }
  }
  