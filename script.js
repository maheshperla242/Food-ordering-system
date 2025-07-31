const cartList = document.getElementById('cart-list');
const totalAmount = document.getElementById('total-amount');
const orderBtn = document.getElementById('order-btn');
const addButtons = document.querySelectorAll('.add-btn');

let cart = [];
let total = 0;

addButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);

    cart.push({ name, price });
    total += price;

    const item = document.createElement('li');
    item.textContent = `${name} - $${price.toFixed(2)}`;
    cartList.appendChild(item);

    totalAmount.textContent = total.toFixed(2);
    orderBtn.disabled = false;
  });
});

orderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  alert("🎉 Thank you! Your order has been placed.");
  cart = [];
  total = 0;

  cartList.innerHTML = '';
  totalAmount.textContent = '0.00';
  orderBtn.disabled = true;
});
