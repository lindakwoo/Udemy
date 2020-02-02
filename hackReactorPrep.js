// var cardData = [{
//   network: 'Visa',       // card issuer (network)
//   prefixes: ['4'],	 // beginning digits
//   lengths: [13, 16, 19]  // lengths of card numbers
// },{
//   network: 'Mastercard',
//   prefixes: ['51', '52', '53', '54', '55'],
//   lengths: [16]
// },{
//   network: 'American Express',
//   prefixes: ['34', '37'],
//   lengths: [15]
// },{
//   network: 'Diner\'s Club',
//   prefixes: ['38', '39'],
//   lengths: [14]
// }];

// // function detectNetwork(cardNumber, cardData) {
// //   // your solution here
// // }

// // example
// // var network = detectNetwork('343456789012345', cardData);
// // console.log(network); // --> 'American Express'

// let detectNetwork = (str, cardData) =>{
//   // add property "preflength" to each card object
//   cardData.forEach(card =>{
//     card.preflength = card.prefixes[0].length;
//   })
  
//   for(let i=0;i<cardData.length;i++){
//     if(cardData[i].prefixes.some(prefix =>{
//       return prefix ===str.slice(0,cardData[i].preflength)
//       })
//     ){if(cardData[i].lengths.some(length =>{
//       return length === str.length
//     })){
//       return cardData[i].network;
//     }

//     }
//   }
//   return "not a valid number"

// }

// console.log(detectNetwork('4345678012345', cardData));


// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// function findPairForSum(integers, target) {
//  let addObj = {};
//  for(let i = 0;i<integers.length;i++){
//    if(!addObj[integers[i]]){
//     addObj[integers[i]]=target - integers[i]
//    } else{
//      if((integers[i]*2)===target){
//        return [integers[i],integers[i]]
//      }
//    }
//  }

//  console.log(addObj);
//  for(key in addObj){
//    for(let i = 0;i<integers.length;i++){
//      if(addObj[key]===integers[i]){
//        return [Number(key),integers[i]];
//      }
//    }
   
//  }
// }

// // example
// var pair = findPairForSum([3, 7, 5,4, 12, 5, 2], 10);
// console.log(pair); // --> [4, 5]


let mult = (num)=>{
  return function(input){
    return num*input
  }
}
 
console.log(mult(4)(9))

// Flip every pair of characters in a string.


// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
// hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// ​
// let flipPairs=(input)=>{
//   let pairArray =[];
//   for(i=0;i<input.length;i+=2){
//       pairArray.push(input[i+1]);
//       pairArray.push(input[i]);       
//   }
//   return pairArray.join("");
// }

// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output);


// let flipEveryNChars=(input,num)=>{
//   let pairArray =[];
//   for(let i=0;i<input.length;i+=num){
//     for(let j=num;j>0;j--){
//       pairArray.push(input[i+j-1]);
//     }       
//   }
//   return pairArray.join("");
// }

// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma  ohs axe trelpma



// let detectOutlierValue =(nums)=>{
//   let numArr = nums.split(" ");
//   let numObj = {
//     odd:[],
//     even:[]
//   }
//   numArr.forEach((numStr,index)=>{
//     num = Number(numStr);
//     if(num%2===0){
//       numObj.even.push(index);
//     }else{
//       numObj.odd.push(index);
//     }
//   })
//   return numObj.even.length===1? numObj.even[0]+1:numObj.odd[0]+1;
// }


// console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
// console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

// let transposeTwoStrings = (str1, str2) =>{
//   let str1Arr = str1.split("");
//   let str2Arr =str2.split("");
//   let bigArr = new Array(Math.max(str1.length, str2.length));
//   for(let i = 0;i<bigArr.length;i++){
//     bigArr[i]=[];
//     bigArr[i].push(str1Arr[i]);
//     bigArr[i].push(str2Arr[i]);
//   }
//   let finalText = "";
//   for(letters of bigArr){
//     finalText +=letters.join(" ");
//     finalText +="\n"
//   }
//   return finalText;
// }

// console.log(transposeTwoStrings("Stepen", "Burger"));

// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

// let findPairForSum = (arr,num)=>{
//   let obj = {};
//   let foundArr = [];
//   for(let i = 0;i<arr.length;i++){
//     let foundIndex = foundArr.indexOf(arr[i]);
//     if(foundIndex!==-1){
//       return([arr[foundIndex],arr[i]])
//     }else{
//       foundArr.push(num-arr[i]);
//     }
//   }
//   return "does not exist"
// }

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (click the drop down to ROT7 to see hint)
// Ol eua juahrk znk yzxotm, eua'rr hk ghrk zu lotj gtuznkx yzxotm otyojk znk juahrkj yzxotm ayotm lgsorogx Yzxotm skznujy.

// Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
// Ykgxin c/ot oz: '       uxrjnkrru c  

// let rotateThis = (str1, str2)=>{
//   let doubleString = str1+str1;
//   return doubleString.indexOf(str2)!==-1;

// }

// console.log(rotateThis("Linda Woo", "nda WooLi"))

// let findNum = (arr, num)=>{
//   let start = 0;
//   let end = arr.length-1;
//   let mid = Math.floor((end + start)/2);
//   while(start<=end){
//     if(arr[mid]===num){
//       return mid;
//     }else if(num>arr[mid]){
//         start = mid+1;
//         mid =  Math.floor((end + start)/2);
//       } else{
//         end = mid-1;
//         mid =  Math.floor((end + start)/2);
//       }
//   }
//   return null;
// }


// console.log(findNum([3,4,5,7,8,9],10))

// function transformFirstAndLast(array) {
//   let obj = {};
//   obj[array[0]]=array[array.length-1];
//   return obj;
//   }

//   console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']));


  function transformEmployeeData(employeeData) {
    let finalArray = [];
    let obj = {};
    for(person of employeeData){
        obj = {};
        for(property of person){
            obj[property[0]]=property[1];
        }
        finalArray.push(obj);
    }
    return finalArray;
  }

//   var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];

// console.log(transformEmployeeData(input))


function convertObjectToArray(obj) {
  let finalArray = [];
  for(key in obj){
      finalArray.push([key,obj[key]])
  }
  return finalArray;
 }

 var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

// console.log(convertObjectToArray(input))


function findShortestElement(arr) {
  if(arr.length===0){
      return "";
  }
let shortest = Infinity;
let answer = ""
for(element of arr){
console.log("word length: ",element.length);
     if(element.length<shortest){
       console.log(`${element.length} is less than ${shortest}`)
        shortest = element.length;
        answer = element;
    }
    console.log("shortest: ",shortest);
    console.log("answer: ",answer)
}
return answer;
}

// console.log(findShortestElement(["linda","i", "woo", "is", "be"]));

function getStringLength(string) {
  let counter = 0;
  let newString = "";
  while(newString!==string){
      newString+=string.slice(0,1);
      counter++;
  }
  return counter;
}

function joinArrayOfArrays(arr) {
 let final = [];
  for(each of arr){
    final = final.concat(each);
  }
 return final;
}

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output);

function sumDigits(num) {
  let negative = false;
   let numArr = num.toString().split("");
   let final = [];
   if(numArr[0]==="-"){
       negative = true;
   } 
   if(negative){
       numArr.shift();
       numArr[0]=Number(numArr[0])*-1;
   }
   for(let i = 0;i<numArr.length;i++){
       final.push(Number(numArr[i]))
   }
  return final.reduce((a,b)=>{
    return a+b;
  })
}

// console.log(sumDigits(-876));

function modulo(num1, num2) {
  let factor = num1/num2;
    if(num1<0&&num2>0){
      factor = factor*-1
      factor = Math.floor(factor);
      num1 = num1*-1
      return (num1 - (num2*factor))*-1
    } else if(num1>0&&num2<0){
      factor = factor*-1;
      factor = Math.floor(factor);
      num2 = num2*-1;
      return (num1 - (num2*factor))

      } else{
        factor = Math.floor(num1/num2);
        return (num1 - (num2*factor));
        }
 }

//  console.log(modulo(54,-5));

function isOddWithoutModulo(num) {
  if(num<0){
      num = num*-1;
  }
  
  let helper = (number)=>{
       if(number ===1){
           return true;
       }
       else if(number===0){
           return false;
       }
       else{
           return helper(number-2);
       }
  }
  
  return helper(num)
}

// console.log(isOddWithoutModulo(-45));

function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  
  let finalSet = new Set([]);
    for(let i = 0;i<text.length;i++){
        finalSet.add(text[i]);
    }
    return finalSet.size===text.length;
}

// console.log(isIsogram("LindaWoo"))

let str = "Linda Woo"
let part = str.slice(1,3)
part
console.log(part)
console.log(str)
let arr = str.split("")
let part1 = arr.splice(1,3,4,5,4)
console.log(part1)
console.log(arr)

// let part2 = arr.slice(2,4);
// console.log(part2)
// console.log(arr)

let newStr = str.slice(0,1)+". "+str.slice(6)
console.log(newStr);
console.log(arr.splice(1))
console.log(arr);