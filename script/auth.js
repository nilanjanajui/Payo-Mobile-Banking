console.log("Auth Loaded");

// Login
document.getElementById("login-btn")?.addEventListener("click", () => {
    const number = getValueFromInput("input-number");
    const pin = getValueFromInput("input-pin");

    if (!/^\d{11}$/.test(number)) return showToast("Invalid mobile number", "error");
    if (!/^\d{4}$/.test(pin)) return showToast("PIN must be 4 digits", "error");

    if (number === "01234567890" && pin === "1234") {
        appState.isLoggedIn = true;
        saveState();
        showToast("Login Successful");
        window.location.href = "home.html";
    } else showToast("Login Failed", "error");
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
    appState.isLoggedIn = false;
    saveState();
    window.location.href = "index.html";
});