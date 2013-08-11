var Bohater = function (dane) {
    this.imie = dane.imie;
    this.wiek = dane.wiek;
    this.plec = dane.plec; // kobieta: 'k', mezczyzna: 'm'
    this.rasa = dane.rasa;
    this.opis = dane.opis;
    this.zdjecie = dane.zdjecie;
    this.umiejetnosci = dane.umiejetnosci || {};
};