document.getElementById('additional-purchase').addEventListener('click', function (event) {

    //getting all the value
    const ram8GB = document.getElementById('ram-8gb').innerText;
    const ram16GB = document.getElementById('ram-16gb').innerText;
    const hdd256GB = document.getElementById('hdd-256').innerText;
    const hdd512GB = document.getElementById('hdd-512').innerText;
    const hdd1TB = document.getElementById('hdd-1TB').innerText;
    const regularDelivery = document.getElementById('regular-delivery').innerText;
    const fastDelivery = document.getElementById('fast-delivery').innerText;

    const ev = event.target.innerText;

    //updating the price according to event
    if (ev == ram8GB)
        updatePrice('extra-memory', 0);
    else if (ev == ram16GB)
        updatePrice('extra-memory', 180);
    else if (ev == hdd256GB)
        updatePrice('extra-storage', 0);
    else if (ev == hdd512GB)
        updatePrice('extra-storage', 100);
    else if (ev == hdd1TB)
        updatePrice('extra-storage', 180);
    else if (ev == regularDelivery)
        updatePrice('delivery-charge', 0);
    else if (ev == fastDelivery)
        updatePrice('delivery-charge', 20);

    //Calling fucntion to get total price
    totalPrice();
})


//update price by this 
function updatePrice(input, price) {
    document.getElementById(input).innerText = price;
}

//calculating total price by this 

function totalPrice() {

    const extraMemory = parseInt(document.getElementById('extra-memory').innerHTML);
    const extraStorage = parseInt(document.getElementById('extra-storage').innerHTML);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerHTML);

    // console.log(extraMemory);
    // console.log(extraStorage);
    // console.log(deliveryCharge);

    price = 1299 + extraMemory + extraStorage + deliveryCharge;

    updatePrice('total-price', price);
    updatePrice('again-total-price', price);

    // Applying prom code
    if (document.getElementById('cupon').value == 'stevekaku') {
        applyPromo(price);
    }
}

//Calcualting and updating the discounted price by this
function applyPromo(price) {
    const discountedPrice = price - (price * .20);
    updatePrice('again-total-price', discountedPrice);
}

//checking and calling funtion for discount
document.getElementById('promoApply').addEventListener('click', function (event) {
    const cuponInput = document.getElementById('cupon').value;
    if (cuponInput == 'stevekaku') {
        promoApply.disabled = true;
        totalPrice();
    }
})


