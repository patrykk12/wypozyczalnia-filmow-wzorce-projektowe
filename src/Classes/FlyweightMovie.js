export class FlyweightMovie {
  // Powtarzalna część w każdym obiekcie
  // zawierającym dane na temat filmu
  constructor(productionYear, genre) {
    this.genre = genre;
    this.productionYear = productionYear;
  }
}
