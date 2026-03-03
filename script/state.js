// state.js (classic script version)
console.log("State utilities loaded");

// Global transaction array
window.transactions = [];

/**
 * Add a transaction to history
 * @param {string} type - "Add Money" or "Cashout"
 * @param {number} amount - Transaction amount
 */
window.addTransaction = function(type, amount) {
    window.transactions.push({
        type,
        amount,
        date: new Date().toLocaleString()
    });
};