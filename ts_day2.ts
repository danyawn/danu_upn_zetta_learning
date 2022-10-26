// Using Tuple array method
function case1(pair: [number, string, number, string]) {
  let first = pair[0];
  let second = pair[1];
  let third = pair[2];
  let fourth = pair[3];
  return first + second + third + fourth;
}
console.log(case1([1, " Type ", 3, " result "]));

// Using Object method
interface forCase2 {
  name: string;
  word1: any;
  cars: number;
  word2: any;
  word3: any;
}

function case2(value: forCase2) {
  let word: any = value.name + " " + value.word1 + " " + value.cars + " " + value.word2 + " " + value.word3;
  return word;
}

let obj: forCase2 = {
  name: "Bejo",
  word1: "has",
  cars: 4,
  word2: "Sports",
  word3: "Cars",
};

console.log(case2(obj));
