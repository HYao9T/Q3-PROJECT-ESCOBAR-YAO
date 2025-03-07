
	function discountPrice() {
		    let FeePrice = document.getElementById('price-button').value;
		    let price = 28;
		    let discount = 0;

		    if (seatType === 'discounted_f') {
		        discount = 0.2;

		        if (seatType === 'regular_f') {
		        discount = 0;
		    }

		    let discount_price = price - (price * discount);
		    window.alert('Your fee is ' + discount_price.toFixed(2));
		}
