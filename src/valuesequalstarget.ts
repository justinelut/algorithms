export interface TValueTarget {
  inputArray: Array<number>;
  target: number;
}

export default function ValueTarget(values: TValueTarget): number[] {
  const numToIndexMap: Record<number, number> = {};

  for (let i = 0; i < values.inputArray.length; i++) {
    const currentNumber = values.inputArray[i];
    const complement = values.target - currentNumber;

    // Check if the complement exists in the map
    if (numToIndexMap.hasOwnProperty(complement)) {
      // Return the indices of the current number and its complement
      return [numToIndexMap[complement], i];
    }

    // Store the current number and its index in the map
    numToIndexMap[currentNumber] = i;
  }

  // If no solution is found, return an empty array or another indicator
  return [];
}








