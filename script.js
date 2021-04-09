function calc() {
  var amount = document.getElementById('amount').value;
  var amount = parseInt(amount, 10);
  var quantity = document.getElementById('quantity').value;
  var quantity = parseInt(quantity, 10);
  var total = amount / quantity;
  document.getElementById('total').value = total;
}
