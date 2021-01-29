
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
    subTotal();
}

function subTotal() {
    const firstClassInput = document.getElementById("first-class");
    const firstClass = parseFloat(firstClassInput.value);
    const economyClassInput = document.getElementById("economy-class");
    const economyClass = parseFloat(economyClassInput.value);
    const subTotal = (firstClass * 150) + (economyClass * 100);
    document.getElementById("sub-total").innerText = subTotal;

    const vatInput = document.getElementById("vat").innerText;
    const vat = parseFloat(vatInput);
    const totalVat = subTotal * 0.1;
    document.getElementById("vat").innerText = totalVat;

    const total = subTotal + vat;
    document.getElementById("total").innerText = total;
    return total;
}