
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('stocks').innerHTML = 
      data.stocks.map(item => `
        <p>${item.boutique} : ${item.produit} (${item.quantite})</p>
      `).join('');
  });
document.getElementById('update-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const produit = document.getElementById('produit-select').value;
  const newQuantite = document.getElementById('new-quantity').value;
  
  // Simulation de mise à jour (à remplacer plus tard)
  alert(`Simulation : ${produit} -> ${newQuantite} unités`);
  // Actualiser l'affichage
  fetchAndDisplayStocks();
});
