
var createElement = function (elementText, callback) {
    var element = $('<div class="element">').text(elementText);
    callback(element);
};