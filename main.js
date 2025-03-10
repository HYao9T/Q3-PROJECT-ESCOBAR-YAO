function discountFare() {
		    let  = document.getElementById('student').value;
            let  = document.getElementById('senior').value;
            let price = 100;
            let discount = 0;

            if (seatType === '') {
                discount = 0.2;
            }


		    let discount_price = price - (price * discount);
		    window.alert('Your total fare is ' + discount_price.toFixed(2) + '. Please proceed to the next step');
		}
