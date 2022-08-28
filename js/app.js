function handlerOnSubmitTotalPrice(element) {
    let targetTotalPriceInput = element.parentElement.children[1];
        tolalPriceInputValue = targetTotalPriceInput.value;
        console.log(tolalPriceInputValue);

    let targetTotalPriceField = document.querySelector('#total-price');
        targetTotalPriceField.innerText = tolalPriceInputValue;

    /* var totalPrice = element.value;
    var totalPriceElement = document.getElementById("totalPrice */
    
}

function  handlerOnDiscountCupon(element) {
    let targetDiscountCuponInput = element.parentElement.children[1];
        discountCuponInputValue = targetDiscountCuponInput.value;
        console.log(discountCuponInputValue);

        let discountAmount = (discountCuponInputValue / 100);
            console.log(discountAmount);

        let targetTotalPriceField = document.querySelector('#total-price');
        let tolalPriceInputValue =  parseFloat(targetTotalPriceField.innerText).toFixed(2);

        let discountPrice = (tolalPriceInputValue * discountAmount);
            // console.log(discountPrice);

        let targetDiscountAmountFild = document.querySelector('#discount-amount');
            targetDiscountAmountFild.innerText = discountPrice;

        let discountedTotalPrice = (tolalPriceInputValue - discountPrice);
            console.log(discountedTotalPrice);

        let targetDiscountedTotalPriceField = document.querySelector('#discounted-price');
            targetDiscountedTotalPriceField.innerText = discountedTotalPrice;
    
}