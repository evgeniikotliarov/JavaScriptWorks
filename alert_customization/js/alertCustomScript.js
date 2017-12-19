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

