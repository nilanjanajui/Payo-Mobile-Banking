console.log("History UI loaded");

function getFilteredTransactions() {
    const filterElement = document.getElementById("history-filter");
    const filterValue = filterElement ? filterElement.value : "ALL";

    if (filterValue === "ALL") {
        return [...window.transactions].reverse();
    }

    return [...window.transactions]
        .filter(tx => tx.type === filterValue)
        .reverse();
}

function renderHistory() {
    const container = document.getElementById("history-list");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const transactions = getFilteredTransactions();

    if (!transactions.length) {
        container.innerHTML = `
            <div class="card bg-base-100 shadow p-4 text-center text-sm text-neutral/60">
                No transactions found
            </div>
        `;
        return;
    }

    transactions.forEach(tx => {
        const sign = tx.type === "ADD_MONEY" ? "+" : "-";
        const color = tx.type === "ADD_MONEY" ? "text-green-600" : "text-red-600";
        const label = tx.type === "ADD_MONEY" ? "Add Money" : "Cashout";
        const source = tx.type === "ADD_MONEY" ? tx.meta.bank : tx.meta.agent;
        const sourceLabel = tx.type === "ADD_MONEY" ? "Bank" : "Agent";

        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow p-4";

        card.innerHTML = `
            <div class="flex justify-between items-start gap-3">
                <div>
                    <p class="font-medium">${label}</p>
                    <p class="text-xs text-neutral/60 mt-1">${sourceLabel}: ${source || "N/A"}</p>
                    <p class="text-xs text-neutral/60">${tx.date}</p>
                </div>
                <p class="font-semibold ${color}">
                    ${sign}$${tx.amount}
                </p>
            </div>
        `;

        container.appendChild(card);
    });
}

function showHistory() {
    showOnly("history");
    renderHistory();
}

const historyFilter = document.getElementById("history-filter");
if (historyFilter) {
    historyFilter.addEventListener("change", renderHistory);
}

const clearHistoryBtn = document.getElementById("clear-history-btn");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
        clearTransactions();
        renderHistory();
        showToast("Transaction history cleared");
    });
}
