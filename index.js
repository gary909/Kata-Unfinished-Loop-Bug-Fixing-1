function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

console.log(createArray(1)); // return [1]
console.log(createArray(2)); // return [1, 2]
console.log(createArray(3)); // return [1, 2, 3]
console.log(createArray(4)); // return [1, 2, 3, 4]
console.log(createArray(5)); // return [1, 2, 3, 4, 5]