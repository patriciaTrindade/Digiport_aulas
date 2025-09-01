// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price and returns the price after applying a 10% discount.

discountedPrice = 0;
function discount10(price) {
  discountedPrice = price * 0.90;
  console.log(`Preço: ${price}  Desconto: ${discountedPrice}`);
  return discountedPrice;
}
discount10(100);
console.log(discount10);
// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `Name: ${this.name} Preço: ${this.price}`;
  }
}

shoe = new Product("Sandalia", 399);
coat = new Product("Sobretudo", 800);
console.log(shoe.describe());
console.log(coat.describe());

// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  products = [];
 
  add(product) {
     for(let i=0; i<this.products.length;i++){
     this.products[i] = new Product();
     }
  }

  soma = 0;
  total() {
    for(let i=0; i<this.products.length;i++){
      soma +=this.products.price;
    }
    console.log(`Soma: ${this.soma}`);
  }

  showProducts() {
     for(let i=0; i<this.products.length;i++){
      console.log(`Produtos: ${this.products[i].describe()}`);
     }
  }

  applyDiscount() {
   
  }
}

cartito = new Cart();
cartito.add();
cartito.total();
cartito.showProducts();
console.log(cartito.showProducts());

// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!
