let cart = [];
let scheduleForLater = false;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  updateCartSidebar();
}

function goToCart() {
  document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
}

function updateCartSidebar() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} – ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    // Redirect to Order Confirmation page
    window.location.href = "order.html"; 
  }
}


// Function to toggle schedule for later option
function toggleScheduleForLater() {
  scheduleForLater = document.getElementById('scheduleForLater').checked;
  if (scheduleForLater) {
    alert('Items will be scheduled for later!');
  } else {
    alert('Items will not be scheduled for later.');
  }
}
