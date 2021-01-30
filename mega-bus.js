document.getElementById("increaseFirstClass").addEventListener("click", function () {
    FirstHandleClick(true);
})
document.getElementById("decreaseFirstClass").addEventListener("click", function () {
    FirstHandleClick(false);
})
document.getElementById("increaseEconomyClass").addEventListener("click", function () {
    EconomyHandleClick(true);
})
document.getElementById("decreaseEconomyClass").addEventListener("click", function () {
    EconomyHandleClick(false);
})
function FirstHandleClick(isIncrease) {
    const primaryTicket = document.getElementById("firstClassTicketAmount");
    const firstClassTicket = parseFloat(firstClassTicketAmount.value);
    let newFirstClassTickets = 0;
    if (isIncrease == true) {
        newFirstClassTickets = firstClassTicket + 1
    }
    if (isIncrease == false && firstClassTicket > 0) {
        newFirstClassTickets = firstClassTicket - 1;
    }
    firstClassTicketAmount.value = newFirstClassTickets;
    var SubTotal = newFirstClassTickets * 150;
    document.getElementById("subTotal").innerText = '$' + SubTotal;
}

function EconomyHandleClick(isIncrease) {
    const primaryTicket = document.getElementById("economyClassTicketAmount");
    const economyClassTicket = parseFloat(economyClassTicketAmount.value);
    let newEconomyClassTickets = 0;
    if (isIncrease == true) {
        newEconomyClassTickets = economyClassTicket + 1
    }
    if (isIncrease == false && economyClassTicket > 0) {
        newEconomyClassTickets = economyClassTicket - 1;
    }
    economyClassTicketAmount.value = newEconomyClassTickets;
    var SubTotal = newEconomyClassTickets * 100;
    document.getElementById("subTotal").innerText = '$' + SubTotal;
}


document.getElementById("bookNowBtn").addEventListener("click", function(){
    document.getElementById("alterScreen").style.display = "block"
})