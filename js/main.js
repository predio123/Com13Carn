function activar() {
    currentf= $( "#myselect option:selected" ).text();
    console.log('escolheu'+ currentf);
    /**
    event.preventDefault();
        $('.like').hide();
    $('.dislike').hide();
    $('#'+place).flip('toggle');
            $('.like').show();
    $('.dislike').show();**/

}

function bancar() {
    currentf = $("#myselect option:selected").text();
    tento = Math.random();
    console.log(tento);
    if (tento < 0.1) {
        $("#mid").text("+2");
        $("#mid").css('color', 'green');
        var marca = currentf + ' teve ganhos de 2 pontos.'+'<br>'
        $("#result").prepend(marca);
    } else if (tento > 0.85) {
        $("#mid").text("0");
        $("#mid").css('color', 'blue');
        var marca ='\n'+ currentf + ' não teve proveitos neste período'+'<br>'
        $("#result").prepend(marca);
    } else {
        $("#mid").text("+1");
        $("#mid").css('color', 'green');
        var marca ='\n'+ currentf + ' teve ganhos de 1 ponto.'+'<br>'
        $("#result").prepend(marca);
    }
}