function CoffeeMachine(power) {
    this.waterAmount = 0;
    console.log('Created coffee machine with: ' + power + ' watts' );
}

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

var powerfulCoffeeMachine = new CoffeeMachine(1000);
powerfulCoffeeMachine.waterAmount = 300;
 console.log(powerfulCoffeeMachine);
 console.log(coffeeMachine);
