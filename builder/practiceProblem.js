class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} ${this.brand} ${this.model} - Motor: ${this.engine}, Cor: ${this.color}, GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.brand = "";
    this.model = "";
    this.year = new Date().getFullYear();
    this.engine = "1.0";
    this.color = "Branco";
    this.gps = false;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setGPS(gps) {
    this.gps = gps;
    return this;
  }

  build() {
    return new Car(this.brand, this.model, this.year, this.engine, this.color, this.gps);
  }
}


const car1 = new CarBuilder()
  .setBrand("Toyota")
  .setModel("Corolla")
  .setYear(2024)
  .setEngine("2.0")
  .setColor("Preto")
  .setGPS(true)
  .build();

const car2 = new CarBuilder()
  .setBrand("Honda")
  .setModel("Civic")
  .setYear(2023)
  .setEngine("2.0")
  .setColor("Prata")
  .setGPS(false)
  .build();

const car3 = new CarBuilder()
  .setBrand("Volkswagen")
  .setModel("Golf")
  .setYear(2022)
  .setEngine("1.4 TSI")
  .setColor("Vermelho")
  .setGPS(true)
  .build();

const car4 = new CarBuilder()
  .setBrand("Ford")
  .setModel("Fusion")
  .setYear(2020)
  .setEngine("2.5")
  .setColor("Azul")
  .setGPS(false)
  .build();

car1.showDetails();
car2.showDetails();
car3.showDetails();
car4.showDetails();
