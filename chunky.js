function chunk(myArray, chunk_size){
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];
  let myChunk;

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
}
console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2))