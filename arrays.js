let arr1 = [3,7,34,90,12];
let lastElement = arr1[arr1.length -1];
console.log(lastElement);

let arr2 = [true, "green","where",12,56];
let make = arr2[arr2.length -1];
console.log(make);

let myPets = ["Cow","Bird","Snake","Dog"];
let text = myPets.join();
console.log(text);

var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var set = arr3.sort((z,y)=>z-y);
console.log(set);

var arr = ["apple","mango","apple","orange","mango","mango"];
 function  take(arr){
    return arr.filter((item,index) => arr.indexOf(item)===index);
 }
 console.log(take(arr));

 function duplicate(arr){
   return arr.filter((currentValue, currentIndex) =>arr.indexOf(currentValue) !==currentIndex);
 }
 console.log(duplicate(arr));
    
 //write a JS script to search for the following word in the array.
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];
let arr5 = ["the","way","x",4];
let words = "we";
if(arr5.includes(words)){
  console.log(words);
}else{
  console.log("the search word was not found")

}


//write a JS script to sort the following string
// //let word = "sevink"
 let word = ["sevink"]
 let sorted = word.sort();  sorted.reverse();
 console.log(sorted);



 