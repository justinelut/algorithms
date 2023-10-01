export default function Factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}
