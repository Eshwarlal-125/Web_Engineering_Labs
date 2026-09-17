// Task 4 — Tip Calculator Edge Cases
function calculateBill({ amount, tipPercent = 15, people = 1 }) {

    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }

    if (typeof tipPercent !== "number") {
        throw new Error("Tip percent must be a number");
    }

    if (people < 1) {
        throw new Error("There must be at least one person");
    }

    const tip = amount * (tipPercent / 100);

    const total = amount + tip;

    return {
        tip: Number(tip.toFixed(2)),
        total: Number(total.toFixed(2)),
        perPerson: Number((total / people).toFixed(2))
    };
}

function formatBill(result) {
    return `Tip: ${result.tip}
Total: ${result.total}
Per Person: ${result.perPerson}`;
}

const bill1 = calculateBill({
    amount: 2400,
    people: 3
});

console.log(formatBill(bill1));

const bill2 = calculateBill({
    amount: 2400,
    tipPercent: 10,
    people: 3
});

console.log("\n" + formatBill(bill2));

try {
    calculateBill({
        amount: 2400,
        tipPercent: "10",
        people: 3
    });
} catch (error) {
    console.error("\n" + error.message);
}