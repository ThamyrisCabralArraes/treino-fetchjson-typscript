const oldCivic = {
  name: 'civic',
  year: 2010,
  broken: true,
  sumary(): string {
    return `Name: ${this.name}`;
  },
};

const oldFusca = {
  name: 'fusca',
  year: 1900,
  broken: false,
  sumary(): string {
    return `Name: ${this.name}`;
  },
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  sumary(): string;
}

// exemplo descontruido
const printVehicle = ({ name, year, broken, sumary }: Vehicle): void => {
  console.log(name, year, broken);

  console.log(sumary());
};
printVehicle(oldCivic);

// exemplo não descontruido
const printVehicle2 = (oldCar: Vehicle): void => {
  // console.log(oldCar.name, oldCar.year, oldCar.broken);
};

printVehicle2(oldCivic);
printVehicle2(oldFusca);
