function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");

    toast.classList.toggle("text-green-600", type === "success");
    toast.classList.toggle("text-red-600", type === "error");

    setTimeout(() => toast.classList.add("hidden"), 2500);
}

function showOnly(sectionId) {
    document.querySelectorAll("#add-money, #cashout").forEach(s => s.classList.add("hidden"));
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove("hidden");
}