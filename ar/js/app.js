function showProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
  }
}

function getProductNumber(products) {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number'));
  } while(isNaN(productNumber) || productNumber < 1 || productNumber > products.length);
  return productNumber;
}

function getProductAmount(product) {
  let productAmount;
  do {
    productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
  } while(isNaN(productAmount) || productAmount < 1 || productAmount > product.availability);
  return productAmount;
}

function calculatePrice(product, amount) {
  return product.price * amount;
}

function calculateFinalPrice(price, discount = 0.2, discountStartsFrom = 10000) {
  if (price >= discountStartsFrom) {
    return price - price * discount;
  } else {
    return price;
  }
}

function buyProduct(products) {
  showProducts(products);
  const productNumber = getProductNumber(products);
  const productToBuy = products[productNumber - 1];
  const productAmount = getProductAmount(productToBuy);
  const price = calculatePrice(productToBuy, productAmount);
  const finalPrice = calculateFinalPrice(price);
  
  if (finalPrice !== price) {
    console.log(`Congrats! You get discount. Your final price is $${finalPrice}`);
  } else {
    console.log(`The final price is $${price}`);
  }
}

buyProduct(products);