
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
function filterByBoutique() {
  const selectedBoutique = document.getElementById('boutique-filter').value;
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const filteredData = selectedBoutique === 'all' 
        ? data.stocks 
        : data.stocks.filter(item => item.boutique === selectedBoutique);
      displayStocks(filteredData);
    });
}
function displayStocks(stocks) {
  let html = '<table><tr><th>Produit</th><th>Boutique</th><th>Quantité</th></tr>';
  
  stocks.forEach(item => {
    const isCritical = item.quantite < 5; // Seuil personnalisable
    html += `
      <tr style="${isCritical ? 'background-color: #ffdddd;' : ''}">
        <td>${item.produit}</td>
        <td>${item.boutique}</td>
        <td>${item.quantite} ${isCritical ? '⚠️' : ''}</td>
      </tr>
    `;
  });

  html += '</table>';
  document.getElementById('stocks').innerHTML = html;
}
