export class RentService {
  constructor() {
    this.current = new FreeMovie();
    this.current.change(this);
  }

  change(stateClass) {
    this.current = stateClass;
    this.current.change(this);
  }

  sign() {
    return this.current.read();
  }

  click() {
    this.current.click();
  }
}

export class RentedMovie {
  change(rentService) {
    this.rentService = rentService;
  }

  read() {
    return "Rented";
  }

  click() {
    this.rentService.change(new FreeMovie());
  }
}

export class FreeMovie {
  change(rentService) {
    this.rentService = rentService;
  }

  read() {
    return "Free";
  }

  click() {
    this.rentService.change(new RentedMovie());
  }
}
