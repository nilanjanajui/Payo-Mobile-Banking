document
    .getElementById("cashout-btn")
    .addEventListener("click", function () {

        const agent = getValueFromInput("cashout-number");
        if (!/^\d{11}$/.test(agent)) {
            showToast("Agent number must be exactly 11 digits", "error");
            return;
        }

        const amount = Number(getValueFromInput("cashout-amount"));
        if (isNaN(amount) || amount <= 0) {
            showToast("Please enter a valid amount", "error");
            return;
        }

        const pin = getValueFromInput("cashout-pin");
        if (!/^\d{4}$/.test(pin)) {
            showToast("PIN must be 4 digits", "error");
            return;
        }

        if (pin !== "1234") {
            showToast("Invalid PIN", "error");
            return;
        }

        const currentBalance = getBalance();
        const newBalance = currentBalance - amount;

        if (newBalance < 0) {
            showToast("Insufficient balance", "error");
            return;
        }

        setBalance(newBalance);

        addTransaction("CASHOUT", amount, { agent });

        document.getElementById("cashout-number").value = "";
        document.getElementById("cashout-amount").value = "";
        document.getElementById("cashout-pin").value = "";

        showToast(`Cashout of $${amount} successful`);
    });
