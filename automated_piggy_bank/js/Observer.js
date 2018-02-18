$(function () {
    const Observer = function() {
        this.listeners = {};
    };
    Observer.prototype.on = function(type, listener) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    };
    Observer.prototype.off = function(type, listener) {
        if (type in this.listeners) {
            for (let i = 0; i < this.listeners[type].length; i++) {
                if (this.listeners[type][i] === listener) {
                    this.listeners[type].splice(i, 1);
                }
            }
        }
    };
    Observer.prototype.trigger = function(type, arguments) {
        if (type in this.listeners) {
            for (let i = 0; i < this.listeners[type].length; i++) {
                let listener = this.listeners[type][i];
                listener(arguments);
            }
        }
    };
    const piggybank = new PiggyBank();

    let coinAdded = function (value) {
        piggybank.addCoin(value);
        observer.trigger('coins_change');
    };

    const observer = new Observer();

    let coinsChange = function () {
        piggybank.showCoins('.totalSumCoins');
        piggybank.getTotal('.total-sum');
    };

    observer.on('coinAdded', coinAdded);
    observer.on('coins_change', coinsChange);

    $('.coin').on('click', function () {
        let value = $(this).text();
        value = parseInt(value);
        observer.trigger('coinAdded', value);
    });
});