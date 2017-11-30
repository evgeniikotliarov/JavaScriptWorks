function CoffeeMachine(power) {
    this.waterAmount = 0;
    console.log('Created coffee machine with: ' + power + ' watts' );
}

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

var powerfulCoffeeMachine = new CoffeeMachine(1000);
powerfulCoffeeMachine.waterAmount = 300;



function CoffeeMachine2(power) {
    this.waterAmount = 0;

    function getBoilTime() {
        return 1000;
    }

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function() {
        setTimeout(onReady, getBoilTime());
    };
}

var coffeeMachine2 = new CoffeeMachine2(100);
coffeeMachine2.waterAmount = 200;

coffeeMachine2.run();
