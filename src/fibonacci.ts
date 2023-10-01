

export default function Fibonacci(n:number){
    let sequence = [0, 1]
    for(let i = 2; i <= n; i++){
     sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}