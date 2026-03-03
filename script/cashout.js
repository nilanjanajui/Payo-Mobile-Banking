document
  .getElementById("cashout-btn")
  .addEventListener("click", function () {

    // 1️⃣ Agent number
    const agentNumber = getValueFromInput("cashout-number");

    if (!/^\d{11}$/.test(agentNumber)) {
      alert("Agent number must be exactly 11 digits");
      return;
    }

    // 2️⃣ Amount
    const amount = Number(getValueFromInput("cashout-amount"));

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid cashout amount");
      return;
    }

    // 3️⃣ Check balance
    const currentBalance = getBalance();

    if (amount > currentBalance) {
      alert("Insufficient balance");
      return;
    }

    // 4️⃣ PIN
    const pin = getValueFromInput("cashout-pin");

    if (!/^\d{4}$/.test(pin)) {
      alert("PIN must be exactly 4 digits");
      return;
    }

    if (pin !== "1234") {
      alert("Invalid PIN");
      return;
    }

    // 5️⃣ Update balance
    const newBalance = currentBalance - amount;
    setBalance(newBalance);

    // 6️⃣ Success message
    alert(
      `Cashout Successful!
Agent: ${agentNumber}
Amount: $${amount}
Time: ${new Date().toLocaleString()}`
    );

  });


