const online = document.getElementById('online');
const cod = document.getElementById('cod');
const container = document.getElementById('payment-type')
const visa = document.getElementById('visa-btn');
const masterCard = document.getElementById('card-btn');
const paypal = document.getElementById('paypal-btn');
const submit = document.getElementById('submit-btn');
const result = document.getElementById('result');
const output = document.getElementById('output');

online.onclick = function () {
    container.style.cssText = 'display: block;'
}

cod.onclick = function () {
    container.style.cssText = 'display: none;'
}

submit.onclick = function () {
    if (online.checked) {
        result.textContent = 'You are Paying online.'
        if (visa.checked) {
            output.textContent = 'Your selected payment method is using a Visa Card.'
        } else if (masterCard.checked) {
            output.textContent = 'Your selected payment method is using a Master Card.'
        } else if (paypal.checked) {
            output.textContent = 'Your selected payment method is using Paypal.'
        } else {
            output.textContent = 'Please select a payment method.'
        }
    } else if (cod.checked) {
        result.textContent = 'You have selected cash on delivery.'
        output.textContent = ''
    }
}