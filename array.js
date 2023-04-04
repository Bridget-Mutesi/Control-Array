let elements = ["blue","pink","yellow","red"];
elements.forEach(myFunction);
function myFunction(item){
    console.log(item);
}


let numbers = [1,2,3,4,5,6,];
let num = [];
numbers.forEach(function(number){
    num.push(number * 2)
})
console.log(num);

 
 function multiplyAdd(items){
     let newArr = [];
       for(let a = 0; a < items.length; a++){
        if(a<=3){
            newArr.push(items[a]*8);
            console.log(newArr);
        }
        else if(a >= items.length-2){
            newArr.push(items[a]+5);
            console.log(newArr);

        }
       }
 }
 let items = [4,3,5,6,8,10];
 multiplyAdd(items);

 //Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
 function myItems(arrNUm){
    let i = 1;
    let n = 9;
    while(i <= n){
        console.log(i);
        i++;
        if(i === 4){
            break;
        }
    }
    console.log(i);
    
 }
let arrNum = [1,2,3,4,5,6,7,8,9];
myItems(arrNum);


function collection(fruity){
    // let i = 0;
    for (let i = 0; i <fruity.length; i++){
        if(i === 2){ 
        continue;
    }
    console.log({"continue":fruity[i]});
}
}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
collection(fruits);
