var zed = 0;
var cars = [0,0, 0,  -0.6, 0.7, 0.7];

$(function () {
    $("#baixo").css('background', 'red');
    console.log("Hi!")
});

function bancar() {
    var currentf = $("#myselect option:selected").text(),
        tento = Math.random();
    console.log(tento);
    if (tento < 0.1) {
        $("#mid").text("+2");
        $("#mid").css('color', 'green');
        var marca = currentf + ' teve ganhos de 2 pontos.' + '<br>';
        $("#result").prepend(marca);
    } else if (tento > 0.85) {
        $("#mid").text("0");
        $("#mid").css('color', 'blue');
        var marca = '\n' + currentf + ' não teve proveitos neste período' + '<br>';
        $("#result").prepend(marca);
    } else {
        $("#mid").text("+1");
        $("#mid").css('color', 'green');
        var marca = '\n' + currentf + ' teve ganhos de 1 ponto.' + '<br>';
        $("#result").prepend(marca);
    }
}

function suave() {
    currentf = $("#myselect option:selected").text();
    tento = Math.floor((Math.random() * 11) - 5);
    tento = Math.round(tento) + 5 * zed;
    //console.log(tento);
    tre = tento.toString();


    if (tento > 5) {
        tento = 5;
    } else if (tento < -5) {
        tento = -5;
    }

    if (tento === 0) {
        $("#mid").text("0");
        $("#mid").css('color', 'blue');
        var marca = currentf + ' não teve perdas nem ganhos.' + '<br>';
        $("#result").prepend(marca);
    } else if (tento > 0) {
        $("#mid").text("+" + tre);
        $("#mid").css('color', 'green');
        var marca = '\n' + currentf + ' lucrou ' + tre + ' pontos. Boa escolha!' + '<br>';
        $("#result").prepend(marca);
    } else {
        $("#mid").text(tre);
        $("#mid").css('color', 'red');
        s = tre.substr(1);
        var marca = '\n' + currentf + ' perdeu ' + s + ' pontos. Não desanime!' + '<br>';
        $("#result").prepend(marca);
    }
}

function duro() {
    currentf = $("#myselect option:selected").text();
    tento = Math.floor((Math.random() * 21) - 10);
    tento = Math.round(tento) + 10 * zed;
    //console.log(tento);
    tre = tento.toString();


    if (tento > 10) {
        tento = 10;
    } else if (tento < -10) {
        tento = -10;
    }

    if (tento === 0) {
        $("#mid").text("0");
        $("#mid").css('color', 'blue');
        var marca = currentf + ' não teve perdas nem ganhos.' + '<br>';
        $("#result").prepend(marca);
    } else if (tento > 0) {
        $("#mid").text("+" + tre);
        $("#mid").css('color', 'green');
        var marca = '\n' + currentf + ' lucrou ' + tre + ' pontos. Boa escolha!' + '<br>';
        $("#result").prepend(marca);
    } else {
        $("#mid").text(tre);
        $("#mid").css('color', 'red');
        s = tre.substr(1);
        var marca = '\n' + currentf + ' perdeu ' + s + ' pontos. Não desanime!' + '<br>';
        $("#result").prepend(marca);
    }
}

function upper() {
    numer = $("#myNumber").val();
    if (numer === "11") {

    } else {
        document.getElementById("myNumber").stepUp();
        $("#baixo").css('background', 'black');
    }
    numer = $("#myNumber").val();
    zed = cars[numer];
    if (numer === "11") {
        $("#cima").css('background', 'red');
    }
}

function downer() {
    numer = $("#myNumber").val();
    if (numer === "0") {

    } else {
        document.getElementById("myNumber").stepDown();
        $("#cima").css('background', 'black');
    }
    numer = $("#myNumber").val();
    zed = cars[numer];
    if (numer === "0") {
        $("#baixo").css('background', 'red');
    }
}
