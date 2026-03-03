const appState = {
    isLoggedIn: false,
    balance: 45000,
    transactions: []
};

function loadState() {
    const saved = localStorage.getItem("payooState");
    if (saved) Object.assign(appState, JSON.parse(saved));
}

function saveState() {
    localStorage.setItem("payooState", JSON.stringify(appState));
}

function checkAuth() {
    if (!appState.isLoggedIn) window.location.href = "index.html";
}

loadState();