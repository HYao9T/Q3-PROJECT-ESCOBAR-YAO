function discountFare() {

    let seatType = document.getElementById('discountID').value;
    let price = 0;
    if (seatType === 'regular') {price = 28;}
    if (seatType === 'student') {price = 28;}
    if (seatType === 'senior') {price = 28;}

    let discountMultiplier = (seatType === "student") * 0.2;
    let discountPrice = price - (price * discountMultiplier);
    let discountPrice_round = discountprice.toFixed(2)

    alert('Your total price is ₱' + discountPrice_round + '. Please proceed to the next section.');

}
