$(function () {
    var stopAddedElement = $('#stop');
    var interval;
    var setIncrement = $('#start');

    var randomNumber = function (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    var createElement = function (elementText, callback) {
        var element = $('<div class="element">').text(elementText);
        callback(element);
    };

    var addElement = function () {
        createElement(randomNumber(0,20), function (element) {
            $('#container').append(element);
        });
    };

    setIncrement.on('click', function () {
        interval = setInterval(addElement, 5000);
    });

    stopAddedElement.on('click', function() {
        clearInterval(interval);
        interval = undefined;
    });
});