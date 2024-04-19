function rollDice() {
    const numOfDice = document.getElementById('input').value;
    const result = document.getElementById('result');
    const images = document.getElementById('images');
    let diceImages = [];
    let value = [];
    
    for (let i = 0; i < numOfDice; i++) {
        let random = Math.ceil(Math.random()*6);
        console.log(random)
        value.push(random);
        diceImages.push(`<img src = "images/${value[i]}.png" alt = "dice ${value}">`);
    }
    result.textContent = `Dice rolls: ${value.join(', ')}`
    images.innerHTML = diceImages.join('');
}