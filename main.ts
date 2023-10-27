export const transform = (n: number, pos: number): number => {
  if (n.toString().length < pos) throw new Error("Number is too short");

  const nStr = n.toString();
  const pthDigit = nStr.charAt(nStr.length - pos);

  let transformed = "";

  for (let i = 0; i < nStr.length - pos; i++) {
    let sum = Number(nStr.charAt(i)) + Number(pthDigit);
    if (sum > 9) {
      sum = sum % 10;
    }
    transformed += sum.toString();
  }
  transformed += pthDigit;

  for (let i = nStr.length - pos + 1; i < nStr.length; i++) {
    transformed += Math.abs(Number(nStr.charAt(i)) - Number(pthDigit))
      .toString();
  }

  return Number(transformed);
};

const tests = [
  [4318672, 4],
  [35197545, 1],
  [975318642, 9],
  [9876543210, 5],
  [314159265358, 10],
];

for (const test of tests) {
  console.log(transform(test[0], test[1]));
}
