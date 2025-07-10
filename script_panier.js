// Sélection de tous les articles
const items = document.querySelectorAll('.item');

// Fonction pour recalculer le total
function updateTotal() {
  let total = 0;
  items.forEach(item => {
    const price = parseInt(item.querySelector('.unit-price').textContent);
    const qty = parseInt(item.querySelector('.qty').textContent);
    total += price * qty;
  });
  document.getElementById('total-price').textContent = total;
}

// Ajout des événements pour chaque article
items.forEach(item => {
  const plusBtn = item.querySelector('.plus');
  const minusBtn = item.querySelector('.minus');
  const deleteBtn = item.querySelector('.delete');
  const likeBtn = item.querySelector('.like');
  const qtySpan = item.querySelector('.qty');

  // Incrémentation
  plusBtn.addEventListener('click', () => {
    let qty = parseInt(qtySpan.textContent);
    qty++;
    qtySpan.textContent = qty;
    updateTotal();
  });

  // Décrémentation
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtySpan.textContent);
    if (qty > 1) {
      qty--;
      qtySpan.textContent = qty;
      updateTotal();
    }
  });

  // Supprimer
  deleteBtn.addEventListener('click', () => {
    item.remove();
    updateTotal();
  });

  // J'aime
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    likeBtn.textContent = likeBtn.classList.contains('liked') ? '❤️' : '🤍';
  });
});

// Calcul initial
updateTotal();
