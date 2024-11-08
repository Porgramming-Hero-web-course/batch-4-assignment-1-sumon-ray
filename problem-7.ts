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
    return ` ${new Date().getFullYear() - this.year} (assuming current year is 2024)`;
  };
}

