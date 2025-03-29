const car = {
  brand: "Chevrole",
  model: "Maliby",
  year: 2018,
  getCarInfo() {
    return `${this.brand} ${this.model}, рік випуску: ${this.year}`;
  },
};

console.log(car.getCarInfo());
