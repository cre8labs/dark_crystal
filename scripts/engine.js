var engine = {
    tura: 1,
    iloscPolWGrze: 40,
    polaStandardowe: [
        new Teren('Droga', [1, 6], 'images/teren/droga.png'),
        new Teren('Rownina', [1, 5], 'images/teren/rownina.png'),
        new Teren('Gory', [1, 3], 'images/teren/gory.png'),
        new Teren('Las', [1, 4], 'images/teren/las.png'),
        new Teren('Bagno', [1, 2], 'images/teren/bagno.png'),
        new Teren('Rzeka', [1, 3], 'images/teren/rzeka.png')
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
        var liczbaOczek = _.random(1, 6);
        $('#wynikKostki').html(liczbaOczek);
        return liczbaOczek;
    },

    graj: function() {
        var pole, przygoda, indexPola, oczkaKostki;
        console.log('Tura: ' + this.tura);
        oczkaKostki = this.rzucKoscia();
        indexPola = engine.obecnyGracz.indexPola + oczkaKostki;
        if(indexPola > (this.pola.length - 1)) {
            alert(engine.obecnyGracz.imie + " rzuciles za duzo koscia!\nTracisz ture.");
            return;
        }
        engine.obecnyGracz.indexPola = indexPola;
        pole = this.pola[engine.obecnyGracz.indexPola];
        plansza.ustawGraczaNaPolu(engine.obecnyGracz, indexPola);
        if (indexPola == (this.pola.length - 1)) {
            alert(engine.obecnyGracz.imie + " - WYGRALES!");
        }
        przygoda = this.losujPrzygodeDlaPola(pole);
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
        $('#tura').html('Tura: ' + this.tura);

    },

    dodajGracza: function() {
        $('dodajGraczaDialog').show();
    }

}; 