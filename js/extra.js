
//ram

document.getElementById('ram-16gb').addEventListener('click', function () {

    document.getElementById('extra-memory').innerText = 180;

})

document.getElementById('ram-8gb').addEventListener('click', function () {


    document.getElementById('extra-memory').innerText = 0

})


//hdd

document.getElementById('hdd-256').addEventListener('click', function () {


    document.getElementById('extra-storage').innerText = 0;

})

document.getElementById('hdd-512').addEventListener('click', function () {


    document.getElementById('extra-storage').innerText = 100;

})

document.getElementById('hdd-1TB').addEventListener('click', function () {


    document.getElementById('extra-storage').innerText = 180;

})


//delivery

document.getElementById('regular-delivery').addEventListener('click', function () {

    document.getElementById('delivery-charge').innerText = 0;

})

document.getElementById('fast-delivery').addEventListener('click', function () {


    document.getElementById('delivery-charge').innerText = 20;

})


const totalBalance(extraMemory, extraStorage, delivery){
    totalBalance = extraMemory + extraStorage + delivery;
    console.log(totalBalance);
}