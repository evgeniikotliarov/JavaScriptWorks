
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

function printCountry (response) {
    for (var i = 0; i < response.length; i++ ) {
        var newTableString = $('<tr>');
        $('#table-body').append(newTableString);

        var columnCode = $('<td>').html(response[i].alpha2Code);
        var columnFlag = $('<td>');
        var createImage = $('<img>').attr('src', response[i].flag).css({'width': '100px'});
        columnFlag.append(createImage);

        var columnName = $('<td>').html(response[i].name);
        var columnCapital = $('<td>').html(response[i].capital);
        var columnPopulation = $('<td>').html(response[i].population);

        newTableString.append(columnCode);
        newTableString.append(columnFlag);
        newTableString.append(columnName);
        newTableString.append(columnCapital);
        newTableString.append(columnPopulation);
    }
}

$('#show').on('click', function () {
    getInformation($('#country-name').val());
});

