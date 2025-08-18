// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.
let market = [{name: "Chocolate", price: 10}, {name: "Bolacha", price: 5}, {name: "Balas", price: 2}];

for(prod of market){
    console.log(`Name: ${prod.name} Price: ${prod.price}`);
}