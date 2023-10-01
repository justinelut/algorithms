
//reverse string, time complexity of o(n) constant time,
//where n is the length of each individual characters in the string
//and o is time, thus for each string a constant time operation is performed, in linear time

export default function ReverseString(input: string): string {
    var strReversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        strReversed += input[i]
    }
    return strReversed
}