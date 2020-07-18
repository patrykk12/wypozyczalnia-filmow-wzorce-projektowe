import { FlyweightFactory } from "./FlyweightFactory";

const flyweightFactory = new FlyweightFactory();

export class CreateMovie {
  constructor(id, name, genre, productionYear, length) {
    this.id = id;
    this.movieFlyweight = flyweightFactory.create(productionYear, genre);
    this.name = name;
    this.length = length;
  }
}
