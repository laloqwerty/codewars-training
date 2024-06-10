function squareSum(numbers){
    //variable to store final result
    let result = 0;
    //iterates over all nunmbers in array
    for(let i=0; i<numbers.length; i++){
        //Math.pow Returns the value of a base expression taken to a specified power.
        result= result +  Math.pow(numbers[i],2);
    }
    //returns final result
    return result;
}

console.log(squareSum([1, 2, 2]));
