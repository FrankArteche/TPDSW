const rangeInput = document.getElementById('range-input');
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');

rangeInput.addEventListener('input', (event) => {
    const value = parseInt(event.target.value);
    rangeMin.textContent = `$0`;
    rangeMax.textContent = `$${value.toLocaleString()}`;
});

document.addEventListener("DOMContentLoaded", function () {
    // cierra todos los filtros al inicio
    document.querySelectorAll('.accordion-collapse').forEach(function (collapse) {
        collapse.classList.remove('show'); // Remueve la clase 'show'
    });

    // botones tambien cerrados
    document.querySelectorAll('.accordion-button').forEach(function (button) {
        button.classList.add('collapsed'); 
        button.setAttribute('aria-expanded', 'false'); 
    });

    // abre solo el filtro de precio
    document.getElementById("filter7").classList.add("show");
    document.querySelector('button[data-bs-target="#filter7"]').classList.remove("collapsed");
    document.querySelector('button[data-bs-target="#filter7"]').setAttribute("aria-expanded", "true");
});