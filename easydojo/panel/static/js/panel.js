$(document).ready(function () {
    var ws = new WebSocket("ws://" + document.location.host + "/ws");
    ws.onmessage = function(evt) {
        if (evt.data == 'S') {
            $('#red').attr('class', 'off');
            $('#green').attr('class', 'green');
        }
        else if (evt.data == 'E') {
            $('#red').attr('class', 'red');
            $('#green').attr('class', 'off');
        }
    };
});


