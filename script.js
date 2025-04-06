document.addEventListener("DOMContentLoaded", () => {
    const sneakers = [
        { name: "Nike Air Max", available: true },
        { name: "Adidas Yeezy", available: false },
        { name: "Puma RS-X", available: true }
    ];
    const list = document.getElementById("sneaker-list");
    sneakers.forEach(sneaker => {
        const div = document.createElement("div");
        div.className = "sneaker";
        div.innerHTML = `<strong>${sneaker.name}</strong> - ${sneaker.available ? "Dostupné" : "<span class='sold-out'>Vypredané</span>"}`;
        list.appendChild(div);
    });
});