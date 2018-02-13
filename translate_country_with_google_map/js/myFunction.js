var translate = {
    name: 'Название',
    borders: 'Пограничные страны'
};
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

$('#show').on('click', function () {
    getInformation($('#country-name').val());
});