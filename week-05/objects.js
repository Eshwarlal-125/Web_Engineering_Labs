// Activity E — Products + groupBy
const products = [
    {
        id: 1,
        title: "Keyboard",
        price: 4500,
        category: "peripherals",
        inStock: true
    },
    {
        id: 2,
        title: "Mouse",
        price: 1800,
        category: "peripherals",
        inStock: false
    },
    {
        id: 3,
        title: "USB Hub",
        price: 1200,
        category: "cables",
        inStock: true
    }
];

const inStockTitles = products
    .filter(product => product.inStock)
    .map(product => product.title);
console.log("In-stock products:", inStockTitles);

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);
console.log("Total price:", totalPrice);

function groupBy(items, key) {
    return items.reduce((groups, item) => {
        const group = item[key];

        if (!groups[group]) {
            groups[group] = [];
        }

        groups[group].push(item);

        return groups;
    }, {});
}
console.log("Grouped products:", groupBy(products, "category"));