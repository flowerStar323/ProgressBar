let defaultVal = 50;

function changeValue() {
    var len = document.querySelector('.progressState').style.width;
    document.querySelector('.progressNumber').innerHTML = len;
}
function finishFunc() {
    var obj = document.querySelectorAll('.progressState');
    if (defaultVal != 100) {

        var timer = setInterval(function () {
            defaultVal += 1;
            if (defaultVal >= 100) {
                clearInterval(timer)
            }
            for (var i = 0; i < obj.length; i++) {
                obj[i].style.width = defaultVal + "%";
                document.querySelectorAll('.progressNumber')[i].innerHTML = defaultVal + "%";
            }
        }, 30)
    }
}