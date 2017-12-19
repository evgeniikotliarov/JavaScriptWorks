$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: "https://restcountries.eu/rest/v2/all/",
        success: printCountry,
        complete: function () {
            $('#table-country').DataTable();
        }
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
});