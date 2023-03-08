const profile = {
  nome: 'thamy',
  age: 34,
  coord: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age, nome }: { age: number; nome: string } = profile;
const {
  coord: { lat, lng },
}: { coord: { lat: number; lng: number } } = profile;
