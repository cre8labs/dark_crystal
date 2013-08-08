var plansza = {
    $mapa: null, // ustawimy to podczas inicjowania (po zaladowaniu strony)
    pola: {},
    rysujPlansze: function(polaGry) {
        var index = 0,
            iloscPol = polaGry.length;

        // czyscimy mape oraz powiazane grafiki pól z realnymi danymi z listy pól
        this.pola = {};
        this.$mapa.empty();

        // iteracja poprzez tablice pol
        for(index; index < iloscPol; index++) {
          // dodajemy pole po polu do mapy
          this.dodajTerenDoPlanszy(polaGry[index]);
        }
    },
    dodajTerenDoPlanszy: function(pole) {
        console.log('dodajTerenDoPlanszy', pole);
        $('<li>' + pole.nazwa + '</li>').appendTo(this.$mapa);
    }
};