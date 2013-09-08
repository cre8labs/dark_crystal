$(document).ready(function($) {

    var $bohaterzy = $('#bohaterzy'),
        $dodajGraczaDialog = $('#dodajGraczaDialog'),
        $gracze = $('#gracze'),
        koloryGraczy = ['gray', 'red', 'green', 'silver', 'orange'];

    plansza.$mapa = $('#mapa');

    $('#dodajGracza').on('click', function() {
        $dodajGraczaDialog.show();
    });

    _.each(bohaterzy, function(bohater, index) {
        $('<li data-index_bohatera="' + index + '"><div class="imie">' + bohater.imie + '</div><div class="opis">' + bohater.opis + '</div><div class="zdjecie"><img width="327" height="900" src="images/bohaterzy/' + bohater.zdjecie + '" /></div></li>').appendTo($bohaterzy);
    });
    $flipster = $('.flipster').flipster();


    $dodajGraczaDialog.on('click', 'button', function() {
        var indexWybranegoBohatera = $('.flip-current').index(),
            gracz = new Gracz(bohaterzy[indexWybranegoBohatera]),
            kolor = koloryGraczy.pop();
        engine.gracze.push(gracz);
        $('<li>' + gracz.imie + '</li>').css('color', kolor).appendTo($gracze);
        gracz.pionek = $('<div class="pionek">' + gracz.imie + '</div>').css('backgroundColor', kolor).appendTo($('#graczeInit'));
        $dodajGraczaDialog.hide();
        // $('li[data-index_bohatera="' + indexWybranegoBohatera + '"]', $bohaterzy).remove();
    });

    for(var i = 0; i < engine.iloscPolWGrze; i++) {
        engine.pola.push(_.shuffle(engine.polaStandardowe)[0]);
    }

    plansza.rysujPlansze(engine.pola);

    $('#losuj').on('click', function() {
        engine.nastepnaTura();
    });

}); 