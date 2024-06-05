function countBy(x,n){
    //final  array to return
    let result = [];
    //loop, this iterates over n times.
    for(let i=1; i<=n; i++){
        //to result, adds the result of the operation i*x each time loop is iterated
        //e.g. first iteration 1*2 = 2 (2 is added to the array).
        //e.g second iteration 2*2 = 4 (4 is added to the array).
        result.push(i*x);
    }
    //returns the final result.
    return result;
}

//logs by console the result.
console.log(countBy(2,5));