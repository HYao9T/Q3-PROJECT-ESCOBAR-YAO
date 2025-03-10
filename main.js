

// JAVASCRIPT: BOTH
function discountFare() {
    let seatType = document.getElementById("discountID").value;
    let price = 28;
    let discount = 0;

    if (seatType === "student" || seatType === "senior") {
        discount = 0.2;
    }

    let discountPrice = price - (price * discount);
    
    document.getElementById("discountFare").innerHTML = "Your discounted fare is: ₱" + discountPrice.toFixed(2);

    window.alert("Your total price is ₱" + discountPrice.toFixed(2) + ". Please proceed to the next section.");
}
