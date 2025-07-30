
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('stocks').innerHTML = 
      data.stocks.map(item => `
        <p>${item.boutique} : ${item.produit} (${item.quantite})</p>
      `).join('');
  });
