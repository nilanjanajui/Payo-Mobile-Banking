// auth.js
import { showToast, shakeCard } from './ui.js';

export function login(contactNumber, pin) {
    const card = document.querySelector('.card-body');

    // Validate inputs
    if (!/^\d{11}$/.test(contactNumber)) {
        showToast("Invalid mobile number", "error");
        shakeCard(card);
        return false;
    }
    if (!/^\d{4}$/.test(pin)) {
        showToast("PIN must be 4 digits", "error");
        shakeCard(card);
        return false;
    }

    // Mock credentials
    if (contactNumber === "01234567890" && pin === "1234") {
        showToast("Login Successful!");
        setTimeout(() => window.location.href = "home.html", 700);
        return true;
    } else {
        showToast("Login Failed", "error");
        shakeCard(card);
        return false;
    }
}