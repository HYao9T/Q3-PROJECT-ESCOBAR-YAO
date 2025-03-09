
// ticket price 

	function checkDiscount() {
		let leaveType = document.getElementById("leave_from").value;
		let userType = document.getElementById("options").value;
		//
		let originalPrice;
		if (leaveType === "Roosevelt") {originalPrice = 28;}
		if (leaveType === "Santolan") {originalPrice = 28;};
		if (leaveType === "North Avenue") {originalPrice = 28;}
		//
		let discountMultiplier = (userType === "student") * 0.2;
		let discountedPrice = originalPrice - (originalPrice * discountMultiplier);

		window.alert('Your ticket price is ₱' + discountedPrice.toFixed(2) + "." + " Please proceed to the next step."); 
	}
