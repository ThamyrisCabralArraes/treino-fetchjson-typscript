const array1: string[] = ['aaa', 'bbbb'];
const array2: Date[] = [new Date(), new Date()];

// array de arrays
const array3: string[][] = [['aaa'], ['bbb']];

// array com objeto
const array4: { a: number; b: number }[] = [{ a: 1, b: 2 }];

// map

array1.map((item: string): number => {
  return item.length;
});

const array5: (string | number)[] = ['idade', 30];

const mapDaArray5 = array5.map((item: string | number): string => {
  return `Resultado ${item}`;
});

//tuple

const array6: [string | number, number, boolean] = ['aaa', 10, true];

//type alias

type Exemplo = [string | number, number, boolean];

const array7: Exemplo = ['aaa', 1, true];
const array8: Exemplo = ['bbb', 2, false];
const array9: Exemplo = ['ccc', 3, true];
