let currentPrice = 100; // Starting price

// Function to simulate real-time price updates
function updatePrice() {
  // Simulate price fluctuation
  const change = (Math.random() * 2 - 1).toFixed(2);
  currentPrice = (currentPrice + parseFloat(change)).toFixed(2);
  document.getElementById("price").innerText = `$${currentPrice}`;
}

// Update price every 1 second
setInterval(updatePrice, 1000);

// Order placement logic
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const type = document.getElementById("orderType").value;
  const qty = parseInt(document.getElementById("quantity").value);

  const log = document.getElementById("orderLog");
  const entry = document.createElement("li");
  entry.textContent = `${type.toUpperCase()} ${qty} shares at $${currentPrice} - Executed`;
  log.prepend(entry);

  // Reset form
  document.getElementById("quantity").value = "";
});
