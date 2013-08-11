var engine = {
    tura: 1,
    iloscPolWGrze: 40,
    polaStandardowe: [
        new Teren('Droga', [2, 6], ''),
        new Teren('Rownina', [1, 5], ''),
        new Teren('Gory', [1, 3], ''),
        new Teren('Las', [1, 4], ''),
        new Teren('Bagno', [1, 2], '')
    ],
    przygodyStandardowe: [
        new Przygoda('Atak wilkow', 'Zaatakowaly Cie wilki, zostales zraniony w noge.', [1, 2]),
        new Przygoda('Spotkanie z podroznikiem', 'Na swojej drodze spotkales podroznika, ktory podwiezie Cie na wozie w nastepnej turze', [3, 6]),
        new Przygoda('Nagla wichura', 'Nagle zerwala sie wichura, tracisz nastepna kolejke.', [0, 0]),
        new Przygoda('Zablakany kon', 'Ujazmiles zablakanego konia. Szybciej sie poruszasz.', [4, 6])
    ],
    obecnyGracz: null,
    gracze: [],
    pola: [],
    przygody: [],
    losujPrzygodeDlaPola: function(pole) {
        var szansaNaPrzygode = 30,
            przygoda = null;
        if(_.random(1, 100) <= szansaNaPrzygode) {
            przygoda = _.shuffle(this.przygodyStandardowe)[0];
        }
        return przygoda;
    },
    rzucKoscia: function() {
        return _.random(1, 5);
    },
    graj: function() {
        if(engine.obecnyGracz.indexPola == -1) {
            console.log('Pierwsza Tura !!!');
            engine.obecnyGracz.indexPola += this.rzucKoscia(5);
        } else {
            console.log('Kolejna Tura: ', this.tura);
        }
        var pole = this.pola[engine.obecnyGracz.indexPola];
        var przygoda = this.losujPrzygodeDlaPola(pole);
        console.log(this.obecnyGracz, pole, przygoda);
        return [pole, przygoda];

    },
    nastepnaTura: function() {
        var engine = this;
        this.gracze.forEach(function(gracz) {
            engine.obecnyGracz = gracz;
            engine.graj();

        });

        this.tura += 1;

    },
    dodajGracza: function() {
        $('dodajGraczaDialog').show();
    }

};