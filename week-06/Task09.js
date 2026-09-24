// Write a function calculateCartTotal(cart) that calculates the total price of all products

function calculateCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
    }
    return total;
}
const cart = [
    { name: "Mouse", price: 1200, quantity: 2 },
    { name: "Keyboard", price: 2500, quantity: 1 }
];
console.log(calculateCartTotal(cart));