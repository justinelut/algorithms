
export default function Palindrome(str: string): string {

    let rstring: string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rstring += str[i]
    }

    if (rstring === str) {
        return "Palindrome " + rstring;
    }
    return rstring
}