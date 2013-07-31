$(document).ready(function($) {

    engine.gracze.push(
        new Bohater('Wojtus', 12, 'm', ''),
        new Bohater('Grzesiu', 20, 'm', ''),
        new Bohater('Bogus', 33, 'm', '')
    );

    for(var i = 0; i < engine.iloscPolWGrze; i++) {
        engine.pola.push(_.shuffle(engine.polaStandardowe)[0]);
    }


});
