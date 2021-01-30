//  Function of ticket counting.
function ticketCount(isIncrease, ticket) {
    const ticketInput = document.getElementById(ticket + "-class");
    const ticketInt = parseInt(ticketInput.value);
    let ticketCount = ticketInt;
    if (isIncrease == true) {
        ticketCount = ticketInt + 1;
    }
    if (isIncrease == false && ticketInt > 0) {
        ticketCount = ticketInt - 1;
    }
    ticketInput.value = ticketCount;
    priceCalculation();
}


// Function of total ticket price.
function priceCalculation() {
    const firstClassInput = document.getElementById("first-class");
    const firstClass = parseFloat(firstClassInput.value);
    const firstClassTotal = firstClass * 150;
    const economyClassInput = document.getElementById("economy-class");
    const economyClass = parseFloat(economyClassInput.value);
    const economyClassTotal = economyClass * 100;
    const subTotal = firstClassTotal + economyClassTotal;
    const vat = subTotal * 0.1;
    const total = subTotal + vat;

    document.getElementById("vat").innerText = vat;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("total").innerText = total;    
}

// Booking button
document.getElementById("confirm-btn").addEventListener('click', function () {
    document.getElementById("total-area").style.display = "none";
    document.getElementById("invoice-area").style.display = "block";
    document.body.style.backgroundImage = "none";
    
})



// Thank You











//// first class increase button//
//// document.getElementById("firstClass-plus").addEventListener('click', function () {
////     const ticketInput = document.getElementById("first-class");
////     const ticketInt = parseInt(ticketInput.value);
////     const ticketCount = ticketInt + 1;
////     ticketInput.value = ticketCount;
////     subTotal();
//// })

//// first class decrease button
//// document.getElementById("firstClass-minus").addEventListener('click', function () {
////     const ticketInput = document.getElementById("first-class");
////     const ticketInt = parseInt(ticketInput.value);
////     const ticketCount = ticketInt - 1;
////     ticketInput.value = ticketCount;
////     subTotal();
//// })

//// economy class increase button
//// document.getElementById("economy-plus").addEventListener('click', function () {
////     const ticketInput = document.getElementById("economy-class");
////     const ticketInt = parseInt(ticketInput.value);
////     const ticketCount = ticketInt + 1;
////     ticketInput.value = ticketCount;
////     subTotal();
//// })

//// economy class decrease button
//// document.getElementById("economy-minus").addEventListener('click', function () {
////     const ticketInput = document.getElementById("economy-class");
////     const ticketInt = parseInt(ticketInput.value);
////     const ticketCount = ticketInt - 1;//
////     ticketInput.value = ticketCount;
////     subTotal();
//// })

//// function subTotal() {
////     const firstClassInput = document.getElementById("first-class");
////     const firstClass = parseFloat(firstClassInput.value);
////     const economyClassInput = document.getElementById("economy-class");
////     const economyClass = parseFloat(economyClassInput.value);
////     const subTotal = (firstClass * 150) + (economyClass * 100);
////     document.getElementById("sub-total").innerText = subTotal;

////     const vatInput = document.getElementById("vat").innerText;
////     const vat = parseFloat(vatInput);
////     const totalVat = subTotal * 0.1;
////     document.getElementById("vat").innerText = totalVat;

////     const total = subTotal + vat;
////     document.getElementById("total").innerText = total;
//// }
