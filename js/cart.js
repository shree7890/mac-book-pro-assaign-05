// extra memory cost
const memoryCost = document.getElementById("memory-cost");
document.getElementById("lowest-memory").addEventListener('click', function () {
    memoryCost.innerText = "0";
    totalCalculate();
});
document.getElementById("highest-memory").addEventListener('click', function () {
    memoryCost.innerText = "180";
    totalCalculate();
});
// extra storage cost
const storageCost = document.getElementById("storage-cost");
document.getElementById("low-storage").addEventListener('click', function () {
    storageCost.innerText = "0";
    totalCalculate();
})
document.getElementById("medium-storage").addEventListener('click', function () {
    storageCost.innerText = "100";
    totalCalculate();
})
document.getElementById("highest-storage").addEventListener('click', function () {
    storageCost.innerText = "180";
    totalCalculate();
})
// delivery cost
const deliveryCharge = document.getElementById("delivery-charge");
document.getElementById("free-delivery").addEventListener('click', function () {
    deliveryCharge.innerText = "0";
    totalCalculate();
})
document.getElementById("paid-delivery").addEventListener('click', function () {
    deliveryCharge.innerText = "20";
    totalCalculate();
})
// best price
const bestPrice = document.getElementById("best-price");
// bestPrice.innerText = parseInt(bestPrice.innerText);

// total price
const totalPrice = document.getElementById("total-price");
// total budget
const total = document.getElementById("total");
// total calculation
function totalCalculate() {
    const memoryCostTotal = parseInt(memoryCost.innerText);
    const storageCostTotal = parseInt(storageCost.innerText);
    const deliveryCostTotal = parseInt(deliveryCharge.innerText);
    let Price = memoryCostTotal + storageCostTotal + deliveryCostTotal + parseInt(bestPrice.innerText);
    totalPrice.innerText = Price;
    total.innerText = totalPrice.innerText;
};