const rangeInput = document.getElementById('range-input');
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');

rangeInput.addEventListener('input', (event) => {
    const value = parseInt(event.target.value);
    rangeMin.textContent = `$0`;
    rangeMax.textContent = `$${value.toLocaleString()}`;
});
