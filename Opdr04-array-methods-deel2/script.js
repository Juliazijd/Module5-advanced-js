//A
const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
const findSpiderMan = array => array.name === "Spiderman";
console.log(superheroes.find(findSpiderMan)); 
  // result: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArrayValues = array => array.map(x => x * 2);
console.log(doubleArrayValues([1, 2, 3])); 
// result: [2, 4, 6]

//C
const containsNumberBiggerThan10 = numbers => numbers.some((number) => {
    return number > 10;
});
  console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 
  // result: true
  console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
  // result: false

//D
const  isItalyInTheGreat7 = array => array.includes('Italy');
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])); 
  // result: true

//E
const tenfold = array => {
    array.forEach(function(value, index, array) {
    array[index] = value * 10;
    }); 
    return array;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
  // result: [10, 40, 30, 60, 90, 70, 110]

//F
const isBelow100 = numbers => numbers.every((numbers) => {
    return numbers <= 100
    })
 console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result: false

//G - BONUS!
const bigSum = array => array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
});
  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result: 1118