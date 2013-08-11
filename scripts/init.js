$(document).ready(function($) {

    var $bohaterzy = $('#bohaterzy'),
        $dodajGraczaDialog = $('#dodajGraczaDialog'),
        $gracze = $('#gracze');

    $('#dodajGracza').on('click', function() {
        $dodajGraczaDialog.show();
    });

    _.each(bohaterzy, function(bohater, index) {
        $('<li data-index_bohatera="' + index + '"><div class="imie">' + bohater.imie + '</div><div class="rasa">' + bohater.rasa + '</div><div class="plec plec_' + bohater.plec + '"></div><div class="wiek">' + bohater.wiek + '</div><div class="opis">' + bohater.opis + '</div><div class="zdjecie"><img src="images/bohaterzy/' + bohater.zdjecie + '" /></div></li>').appendTo($bohaterzy);
    });
    $('.flipster').flipster();

    $dodajGraczaDialog.on('click', 'button', function() {
        var indexWybranegoBohatera = $('.flip-current').index(),
            gracz = new Gracz(bohaterzy[indexWybranegoBohatera]);
        engine.gracze.push(gracz);
        $('<li>' + gracz.imie + '</li>').appendTo($gracze);
        $dodajGraczaDialog.hide();
    });

    for(var i = 0; i < engine.iloscPolWGrze; i++) {
        engine.pola.push(_.shuffle(engine.polaStandardowe)[0]);
    }

    plansza.$mapa = $('#mapa');
    plansza.rysujPlansze(engine.pola);


});
