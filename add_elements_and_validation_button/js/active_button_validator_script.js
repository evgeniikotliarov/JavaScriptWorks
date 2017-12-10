$(function () {
    var userNameText;
    var passwordText;

    $('input[name="username"]').on('keyup', function(event) {
        userNameText = event.target.value;

        if (userNameText.length > 6 && passwordText.length > 6){
            $('input[type="submit"]').attr('disabled', false);
        }
    });

    $('input[name="password"]').on('keyup', function(event) {
        passwordText = event.target.value;

        if (passwordText.length > 6 && userNameText.length > 6){
            $('input[type="submit"]').attr('disabled', false);
        }
    });

    $('input[type="submit"]').on('click', function (event) {
        event.preventDefault();
        alert('User name: ' + userNameText + '\n' + 'Password: ' + passwordText);
    })
});