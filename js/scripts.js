const schemeSvg = document.querySelector('.scheme-svg');
const totalpriceTag = document.querySelector(".price-total")
let cost = 800;
let totalprice = 0;
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalprice = totalSeats * cost;
        totalpriceTag.textContent = totalprice;
    }
});