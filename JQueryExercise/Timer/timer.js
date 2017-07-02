function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let btnStart = $('#start-timer');
    let btnPause = $('#stop-timer');

    let currentTime = 0;
    let timer;

    btnStart.on('click', startClock);
    btnPause.on('click', () => clearInterval(timer));

    function startClock() {
        timer = setInterval(step, 1000);

        function step() {
            currentTime++;
            hours.text(('0' + parseInt(currentTime / 60 / 60)).slice(-2));
            minutes.text(('0' + parseInt(currentTime / 60)).slice(-2));
            seconds.text(('0' + parseInt(currentTime % 60)).slice(-2))
        }
    }
}
