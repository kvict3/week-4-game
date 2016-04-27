$(document).ready(function () {
    var minNumber = 19;
    var maxNumber = 120;
    amethyst = Math.floor((Math.random() * 12) + 1);
    garnet = Math.floor((Math.random() * 12) + 1);
    pearl = Math.floor((Math.random() * 12) + 1);
    steven = Math.floor((Math.random() * 12) + 1);
    var yourNumber = 0;
    var w = 0;
    var l = 0;


    $('#currentTotal').html('<h3>' + yourNumber + '</h3>');
    $('#wins').html('<h3>' + w + '</h3>');
    $('#losses').html('<h3>' + l + '</h3>');

    function targetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);

    };
    var randomNumber = targetNumber(19, 120);
    $('#ranNum').html('<h3>' + randomNumber + '</h3>');

    $("#amethyst").click(function () {
        yourNumber += amethyst;
        $('#currentTotal').html('<h3>' + yourNumber + '</h3>');
        check()

    });
    $("#garnet").click(function () {
        yourNumber += garnet;
        $('#currentTotal').html('<h3>' + yourNumber + '</h3>');
        check()

    });
    $("#pearl").click(function () {
        yourNumber += pearl;
        $('#currentTotal').html('<h3>' + yourNumber + '</h3>');
        check()

    });
    $("#steven").click(function () {
        yourNumber += steven;
        $('#currentTotal').html('<h3>' + yourNumber + '</h3>');
        check()
    });


    var check = function () {
        if (yourNumber == randomNumber) {
            w++;
            $('#wins').html('<h3>' + w + '</h3>');
            alert("You Win!");
            restart();
        }
        if (yourNumber > randomNumber) {
            l++;
            $('#losses').html('<h3>' + l + '</h3>');
            alert("You Lose!");
            restart();


        }
    }

    var restart = function () {
        yourNumber = 0;
        $("#currentTotal").html(yourNumber);
        randomNumber = targetNumber(19, 120);
        $('#ranNum').html('<h3>' + randomNumber + '</h3>');


        amethyst = Math.floor((Math.random() * 12) + 1);
        garnet = Math.floor((Math.random() * 12) + 1);
        pearl = Math.floor((Math.random() * 12) + 1);
        steven = Math.floor((Math.random() * 12) + 1);

    }

});


