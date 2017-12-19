function addData(response) {
    $.each(response, function(i, item) {
        $('<tr>').html("<td>" + response[i].alpha2Code + "</td><td>" + response[i].name + "</td><td>" + response[i].capital + "</td>" +
            "<td>" + response[i].population + "</td><td class='flag'>" + "<img src='" + response[0].flag + "'width=100px'" + "</td>").appendTo('#table');
    });
}

function getFullInformation(name) {
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
$.ajax({
    method: 'GET',
    url: "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;capital;population,flag",
    success: function (response) {
        for (var i = 0; i < response.length; i++){
            getFullInformation(response[i].name);
        }
    }
});