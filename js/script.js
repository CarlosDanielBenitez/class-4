document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.querySelector('.add-btn');
    const removeBtn = document.querySelector('.remove-btn');
    const cartCount = document.querySelector('.cart-count');
  
    let itemCount = 0; // Contador para el número de productos en el carrito
  
    addBtn.addEventListener('click', function() {
      // Lógica para agregar el producto al carrito
      itemCount++; // Incrementa el contador de productos
      updateCartCount(); // Actualiza la visualización del contador de carrito
    });
  
    removeBtn.addEventListener('click', function() {
      // Lógica para eliminar el producto del carrito
      if (itemCount > 0) {
        itemCount--; // Disminuye el contador de productos solo si hay al menos uno en el carrito
        updateCartCount(); // Actualiza la visualización del contador de carrito
      }
    });
  
    function updateCartCount() {
      // Actualiza la visualización del contador de carrito
      cartCount.textContent = itemCount;
    }
  });

  const javascript = document.querySelector(".javascript")

  
  