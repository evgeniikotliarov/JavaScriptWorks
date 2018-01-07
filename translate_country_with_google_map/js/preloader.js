$(document).ajaxStart(function() {
    $('#preloader').show();
});

$(document).ajaxStop(function() {
    $('#preloader').hide();
});