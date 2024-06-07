function grow(array){
  
    let result = array[0];

    for(let i=0; i<array.length-1; i++){
    
        result = result * array[i+1];

    }    
    return result;
}
console.log(grow([1,2,3,4]));