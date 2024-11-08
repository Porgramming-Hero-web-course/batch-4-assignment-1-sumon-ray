class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge = (): string => {
    return `this car is ${new Date().getFullYear() - this.year} years old`;
  };
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
