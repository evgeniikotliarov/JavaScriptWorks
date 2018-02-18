const PiggyBank = function () {
    this.coins = {
        1: 0,
        3: 0,
        5: 0,
        10: 0
    };
};

PiggyBank.prototype.addCoin = function(value) {
    switch (value) {
        case 1: case 3: case 5: case 10:
        this.coins[value]++;
        break;
        default:
            console.log('This is not a correct value!');
    }
};

PiggyBank.prototype.showCoins = function(coinNumber) {
    $('.total-sum-number').empty();
    let titleElement = $('<h2>Total: <span class="total-sum"></span></h2>');
    $('.total-sum-number').append(titleElement);
    for (let value in this.coins) {
        $(coinNumber).append(value + ':' + (this.coins[value]) + '<br>');
    }
};

PiggyBank.prototype.getTotal = function(totalContainer) {
    let total = 0;
    for (let value in this.coins) {
        total += value * this.coins[value];
    }
    $(totalContainer).html(total);
};