document.addEventListener('DOMContentLoaded', function() {
    // Cambiar imagen principal al hacer clic en miniaturas
    const thumbnails = document.querySelectorAll('.product-thumbnails img');
    const mainImage = document.querySelector('.product-main-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Actualizar imagen principal
            mainImage.src = this.src;
            
            // Actualizar clase active
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Selector de tallas
    // Manejo de selección de tallas
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover la clase 'selected' de todos los botones
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Agregar la clase 'selected' al botón clickeado
            this.classList.add('selected');
        });
    });

    
    // Control de cantidad
    const quantityInput = document.querySelector('.quantity-selector input');
    const minusBtn = document.querySelector('.quantity-selector button:first-child');
    const plusBtn = document.querySelector('.quantity-selector button:last-child');
    
    minusBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        quantityInput.value++;
    });
});

