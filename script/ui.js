// ui.js
export function showToast(message, type="success") {
    let toast = document.getElementById('toast');
    if(!toast){
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = "fixed bottom-5 left-1/2 -translate-x-1/2 bg-base-100 shadow-lg px-4 py-2 rounded-full text-sm z-50";
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.style.color = type === "error" ? "#dc2626" : "#16a34a";
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 2500);
}

export function shakeCard(card) {
    if(!card) return;
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
}