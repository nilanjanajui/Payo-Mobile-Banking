console.log("Machine utilities loaded");

/**
 * Get trimmed value from input/select safely
 */
function getValueFromInput(id) {
    const element = document.getElementById(id);

    if (!element) {
        console.error(`Element with id "${id}" not found`);
        return "";
    }

    return element.value.trim();
}

/**
 * Get numeric balance safely (handles commas)
 */
function getBalance() {
    const balanceElement = document.getElementById("balance");

    if (!balanceElement) {
        console.error("Balance element not found");
        return 0;
    }

    const rawText = balanceElement.innerText.replace(/,/g, "");
    const balance = Number(rawText);

    if (isNaN(balance)) {
        console.error("Balance is not a valid number");
        return 0;
    }

    return balance;
}

/**
 * Set balance safely with formatting
 */
function setBalance(value) {
    const balanceElement = document.getElementById("balance");

    if (!balanceElement) {
        console.error("Balance element not found");
        return;
    }

    if (typeof value !== "number" || isNaN(value) || value < 0) {
        console.error("Invalid balance value:", value);
        return;
    }

    balanceElement.innerText = value.toLocaleString();

    if (typeof window.persistState === "function") {
        window.persistState();
    }
}

function showOnly(sectionId) {
    const sections = document.querySelectorAll("#add-money, #cashout, #history");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const target = document.getElementById(sectionId);

    if (!target) {
        console.error(`Section "${sectionId}" not found`);
        return;
    }

    target.classList.remove("hidden");
}

function showToast(message, type = "success") {
    const toastContainerId = "toast-container";
    let container = document.getElementById(toastContainerId);

    if (!container) {
        container = document.createElement("div");
        container.id = toastContainerId;
        container.className = "toast toast-top toast-end z-50";
        document.body.appendChild(container);
    }

    const alert = document.createElement("div");
    const statusClass = type === "error" ? "alert-error" : "alert-success";
    alert.className = `alert ${statusClass}`;
    alert.innerHTML = `<span>${message}</span>`;

    container.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 2200);
}
