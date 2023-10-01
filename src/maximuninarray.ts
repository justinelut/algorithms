//greatest element in an array, time complexity of o(n) constant time,
//where n is the length of each element in the array
//and o is time, thus for each array a constant time operation is performed, in linear time

export interface Max {
    nums: Array<number>; 
}


export default function MaxNumberInArray(inputs: Max): Number{
    let largest:number = inputs.nums[0];
    for(let i = 0; i <= inputs.nums.length; i++){
        if(inputs.nums[i] > largest){
            largest = inputs.nums[i]
        }
    }
    return largest
}

