document
    .getElementById("add-money-btn")
    .addEventListener("click", function () {

        const bank = getValueFromInput("add-money-bank");
        if (!bank || bank === "Select Bank") {
            showToast("Please select a bank", "error");
            return;
        }

        const accountNumber = getValueFromInput("add-money-number");
        if (!/^\d{11}$/.test(accountNumber)) {
            showToast("Account number must be exactly 11 digits", "error");
            return;
        }

        const amount = Number(getValueFromInput("add-money-amount"));
        if (isNaN(amount) || amount <= 0) {
            showToast("Please enter a valid amount", "error");
            return;
        }

        const pin = getValueFromInput("add-money-pin");
        if (!/^\d{4}$/.test(pin)) {
            showToast("PIN must be 4 digits", "error");
            return;
        }

        if (pin !== "1234") {
            showToast("Invalid PIN", "error");
            return;
        }

        const currentBalance = getBalance();
        const newBalance = currentBalance + amount;
        setBalance(newBalance);

        addTransaction("ADD_MONEY", amount, { bank });

        document.getElementById("add-money-number").value = "";
        document.getElementById("add-money-amount").value = "";
        document.getElementById("add-money-pin").value = "";

        showToast(`Added $${amount} successfully from ${bank}`);
    });
