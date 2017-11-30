function Machine() {
    var enabled = false;

    this.enable = function() {
        enabled = true;
    };

    this.disable = function() {
        enabled = false;
    };
}


function CoffeeMachine(power) {
    this.waterAmount = 0;
    Machine.call(this);
    console.log('Created coffee machine with: ' + power + ' watts' );
}

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

var powerfulCoffeeMachine = new CoffeeMachine(1000);
powerfulCoffeeMachine.waterAmount = 300;



function CoffeeMachine2(power) {
    this.waterAmount = 0;
    Machine.call(this);

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
coffeeMachine2.enable();
coffeeMachine2.waterAmount = 200;
coffeeMachine2.run();
coffeeMachine2.disable();
console.log(coffeeMachine.disable());

var makeDrinkForPerson = function(drinkMachine, person) {
    drinkMachine.waterAmount = 200;
    var drink = drinkMachine.run();

    person.give(drink);
};
var cocktailMaker = new CocktailMaker('rum', 'cola');
var person = findPersonByName('John');

makeDrinkForPerson(cocktailMaker, person);

