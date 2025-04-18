
document.getElementById('scoreForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const price = parseFloat(document.getElementById('price').value);
  const description = document.getElementById('description').value;

  // Simple scoring simulation based on keywords
  let flipScore = 5;
  let suggestedOffer = price * 0.5;
  let resaleEstimate = price * 1.5;
  let script = "Hey, if this doesn’t sell soon would you consider £" + Math.round(suggestedOffer) + "? I can collect quickly.";

  if (description.toLowerCase().includes('good condition')) flipScore += 2;
  if (description.toLowerCase().includes('needs gone')) flipScore += 1;
  if (description.toLowerCase().includes('damaged')) flipScore -= 2;

  document.getElementById('flipScore').textContent = Math.min(flipScore, 10);
  document.getElementById('offer').textContent = Math.round(suggestedOffer);
  document.getElementById('resale').textContent = Math.round(resaleEstimate);
  document.getElementById('script').textContent = script;
});
