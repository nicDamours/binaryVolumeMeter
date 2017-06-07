$(document).ready(function () {
    for (var i = 7; i >= 0; i--) {
        $('.switch').append("<td><div style='--webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg)'><input type='checkbox' value='" + Math.pow(2, i) + "' class='js-switch'></div></td>");
    }
    var total = 0;
    $('input[type=checkbox]').on('change', function ($elem) {
        checkForTotal();
    });
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function (html) {
        var switchery = new Switchery(html);
    });
    var video = document.getElementById("myVideo");
    video.volume = 0;
    function checkForTotal() {
        total = 0;
        $('input[type=checkbox]:checked').each(function ($index, $elem) {
            total += +$elem.value;
        })
        $('.total').html(total);
        var video = document.getElementById("myVideo");
        video.volume = total / 128;
    }
})