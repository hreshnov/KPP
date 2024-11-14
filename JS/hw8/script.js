const priceInput = document.getElementById('price');
const priceOutput = document.getElementById('price-output');
const errorMessage = document.getElementById('error-message');

priceInput.addEventListener('blur', () => {
  const priceValue = parseFloat(priceInput.value);

  if (priceValue < 0 || isNaN(priceValue)) {
    priceInput.style.borderColor = 'red';
    errorMessage.textContent = 'Please enter correct price';
  } else {
    priceInput.style.borderColor = 'green';
    errorMessage.textContent = '';
    priceInput.style.color = 'green';

    const newPriceSpan = document.createElement('span');
    newPriceSpan.classList.add('valid-price');
    newPriceSpan.textContent = `Текущая цена: ${priceValue}`;
        const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = () => {
      newPriceSpan.remove();
    };

    newPriceSpan.appendChild(removeButton);

    priceOutput.appendChild(newPriceSpan);

    priceInput.value = '';
  }
});

function clearPrice() {
  priceInput.value = '';
  priceOutput.innerHTML = '';
  priceInput.style.color = '';
}
