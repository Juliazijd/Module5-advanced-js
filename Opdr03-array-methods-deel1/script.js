//A
const addTheWordCool = array => {
    array.push("cool");
    console.log("Add cool:", array);
};
addTheWordCool(["nice", "awesome", "tof"]);
// resultaat: ["nice", "awesome", "tof", "cool"]

//B
const amountOfElementsInArray = array => console.log(array.length);
amountOfElementsInArray(['appels', 'peren', 'citroenen']); 
// resultaat: 3

//C
const selectBelgiumFromBenelux = array => console.log(array[0]);
selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]); 
// resultaat: "Belgie" 

//D
const lastElementInArray = array => console.log(array[array.length - 1]);
lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]); 
// resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = array => console.log(array.slice(1, 4));
const impeachTrumpSplice = array => {
    array.splice(0, 1);
    console.log(array);
}
  
impeachTrumpSlice(presidents); // ["Obama", "Bush", "Clinton"]
impeachTrumpSplice(presidents); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = array => console.log(array.join(' '));
stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']); 
//resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = (array1, array2) => console.log(array1.concat(array2));
combineArrays([1,2,3], [4,5,6]);
  // resultaat: [1,2,3,4,5,6]