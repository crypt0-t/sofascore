
document.getElementById('scoreForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const price = parseFloat(document.getElementById('price').value);
  const desc = document.getElementById('description').value.toLowerCase();
  const imgUrl = document.getElementById('image').value;

  let score = 6;
  if (desc.includes("good condition")) score += 2;
  if (desc.includes("needs gone") || desc.includes("quick sale")) score += 1;
  if (desc.includes("stain") || desc.includes("damaged")) score -= 2;

  const offer = Math.round(price * 0.5);
  const resale = Math.round(price * 1.5);
  const script = `Hey, if this doesn’t sell would you consider £${offer}? I can collect quickly.`;

  document.getElementById('flipScore').textContent = Math.min(score, 10);
  document.getElementById('offer').textContent = offer;
  document.getElementById('resale').textContent = resale;
  document.getElementById('script').textContent = script;

  if (imgUrl) {
    const img = document.getElementById('preview');
    img.src = imgUrl;
    img.style.display = 'block';
  }
});
