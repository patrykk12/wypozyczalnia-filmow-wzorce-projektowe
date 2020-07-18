import { FlyweightMovie } from "./FlyweightMovie";

export class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  create(productionYear, genre) {
    const id = `${productionYear}/${genre}`;
    if (!this.flyweights[id]) {
      return (this.flyweights[id] = new FlyweightMovie(productionYear, genre));
    }
    return this.flyweights[id];
  }

  getAll() {
    return this.flyweights;
  }
}
