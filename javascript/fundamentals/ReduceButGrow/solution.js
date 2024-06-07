function grow(array){
    //asigns rsult to the first value of the array
    let result = array[0];
    //iterates array
    for(let i=0; i<array.length-1; i++){
        //multiplies the array numbers 
        result = result * array[i+1];
    }    
    return result;
}
console.log(grow([1,2,3,4]));