
$(function() {
    $.getJSON('https://restcountries.eu/rest/v2/all?fields=name;flag', function(countries) {
        var options = {
            data: countries,
            getValue: "name",
            theme: "square",
            list: {match: {enabled: true}},
            template: {
                type: "iconLeft",
                fields: {
                    iconSrc: "flag"
                }
            }

        };
        $("#country-name").easyAutocomplete(options);
    });
});

function getInformation(name) {
    $.ajax({
        statusCode: {
            404: function() {
                alert( "page not found" );
            }
        },
        method: 'GET',
        url: "https://restcountries.eu/rest/v2/name/" + name,
        success: printCountry
    });

}
$(document).ajaxStart(function() {
    $('#preloader').show();
});

$(document).ajaxStop(function() {
    $('#preloader').hide();
});

$('#show').on('click', function () {
    getInformation($('#country-name').val());
});

