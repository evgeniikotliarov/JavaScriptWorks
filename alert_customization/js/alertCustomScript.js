$('[data-alert]').on('click', function () {
    customAlert({
        header: 'header',
        body: 'simple body',
        button: 'ok',
        callback: function () {
            console.log('Button OK')
        }
    })
});

function customAlert(params) {
    $('#overlay').fadeIn(1000);
    $('#header').html(params.header);
    $('#body').html(params.body);
    $('#button-ok').on('click', function () {
        if (params.callback) params.callback();
        $('#overlay').fadeOut(1000);
    });

}
