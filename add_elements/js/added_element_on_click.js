$(function() {
    $('#add-item-btn').on('click', function () {
        createElement('Element', function (element) {
            $('#container').append(element);
        });
    });
});

var createElement = function (elementText, callback) {
    var element = $('<div class="element">').text(elementText);
    callback(element);
};