function calculate () {
    const paInput = document.getElementById('pa');
    const intInput = document.getElementById('int');
    const yrsInput = document.getElementById('yrs');
    const total = document.getElementById('total');

    let pa = Number(paInput.value);
    let int = Number(intInput.value/ 100);
    let yrs = Number(yrsInput.value);

    if (pa < 0){
        pa = 0;
    }

    if (int < 0){
        int = 0;
    }

    if (yrs < 0){
        yrs = 0;
    }

    let result = pa * ( 1 + int / 1 )**yrs

    total.textContent = result.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'})
}