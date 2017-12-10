$(function() {
    var seconds = $('#seconds');
    var minutes = $('#minutes');

    var start = $('#start');
    var pause = $('#pause');
    var reset = $('#reset');
    var interval;
    var secondsCounter = 0;
    var minutesCounter = 0;

    start.on('click', function() {
        if (!interval){
            interval = setInterval(function () {
                if (secondsCounter === 60){
                    secondsCounter = 0;
                    minutesCounter++;
                    seconds.text(secondsCounter);
                }
                if(secondsCounter < 10){
                    seconds.text('0' + secondsCounter)
                }else{
                    seconds.text(secondsCounter)
                }
                secondsCounter++;
                if(minutesCounter < 10){
                    minutes.text('0' + minutesCounter)
                }else {
                    minutes.text(minutesCounter)
                }

            },1000);
        }
    });
});