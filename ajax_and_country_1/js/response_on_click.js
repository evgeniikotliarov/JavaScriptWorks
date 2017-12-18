function addData(response) {
    console.log(response);
    $('#name').html(response[0].name);
    $('#region').html(response[0].region);
    $('#subregion').html(response[0].subregion);
    $('#capital').html(response[0].capital);
    $('#flag').html("<img src='" + response[0].flag + "'width=100px'>");
}

function getInformation(name) {
    $.ajax({
        statusCode: {
            404: function() {
                alert( "page not found" );
            }
        },
        method: 'GET',
        url: "https://restcountries.eu/rest/v2/name/" + name,
        success: addData
    });
}

$('#show').on('click', function () {
    getInformation($('#country-name').val());
});