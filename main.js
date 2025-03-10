    function discountFare() {
            let seatType = document.getElementById('discount_fare').value;
            let price = 28;
            let discount = 0;

            if (studentType === 'student') {
                discount = 0.2;
            }

            if (seniorType === 'senior') {
                discount = 0.2;
            }

            let discount_price = price - (price * discount);
            window.alert('Your total price is ' + discount_price.toFixed(2) + '. Please proceed to the next section');
        }
