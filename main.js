function discountPrice() {
    let FeePrice = document.getElementById('price-button').value;
    let price = 28;
    let discount = 0;

    if (FeePrice === 'discounted_f') {
        discount = 0.2;
    } else if (FeePrice === 'regular_f') {
        discount = 0;
    }

}	
