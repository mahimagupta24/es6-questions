//Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = ({price,inStock} )=>
  inStock
    ? `Socks costs INR ${price} and is in stock`
    : `Socks costs INR ${price} and is not in stock.`;

const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};
//  const formatProduct = productObj =>
//    `Socks costs INR ${productObj.price} and is ${productObj.inStock ? '' : 'not '}in stock`

const message = formatProduct(product);
console.log(message);
