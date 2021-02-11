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

// Function of invoice calculation
function invoice(ticket, invo, none, visible) {
    document.getElementById("total-area").style.visibility = none;
    document.getElementById("invoice-area").style.visibility = visible;
    const totalPrice = document.getElementById("total").innerText;
    const priceFloat = parseFloat(totalPrice);
    document.getElementById("invo-total").innerText = priceFloat;
    const ticketInput = document.getElementById(ticket + "-class");
    const quantity = parseFloat(ticketInput.value);
    document.getElementById("invo-" + invo).innerText = quantity;
    // return quantity;
}

// invoice hidden
document.getElementById("confirm").addEventListener('click', function() {
    document.getElementById("invoice-area").style.visibility = 'hidden';
})

// Thank You