console.log("State management loaded");

const BALANCE_STORAGE_KEY = "payoo_balance";
const TRANSACTION_STORAGE_KEY = "payoo_transactions";

function loadTransactions() {
    const stored = localStorage.getItem(TRANSACTION_STORAGE_KEY);

    if (!stored) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Failed to parse transactions from localStorage", error);
        return [];
    }
}

function loadBalance() {
    const stored = localStorage.getItem(BALANCE_STORAGE_KEY);

    if (!stored) {
        return null;
    }

    const balance = Number(stored);
    return Number.isFinite(balance) && balance >= 0 ? balance : null;
}

window.persistState = function () {
    localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(window.transactions));
    localStorage.setItem(BALANCE_STORAGE_KEY, String(getBalance()));
};

window.transactions = loadTransactions();

window.addTransaction = function (type, amount, meta = {}) {
    const transaction = {
        id: Date.now(),
        type,
        amount,
        meta,
        date: new Date().toLocaleString()
    };

    window.transactions.push(transaction);
    window.persistState();

    console.log("Transaction added:", transaction);
};

window.clearTransactions = function () {
    window.transactions = [];
    window.persistState();
};

const storedBalance = loadBalance();
if (storedBalance !== null) {
    setBalance(storedBalance);
} else {
    window.persistState();
}
