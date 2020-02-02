let power = (num,exp) =>{
    if(exp===0){
        return 1;
    }
    else{
        return num*power(num,exp-1);
    }
}


// console.log(power(5,3))

let factorial = (num)=>{
    if(num===0){
        return 1;
    }else {
        return num*factorial(num-1);
    }
}

// console.log(factorial(6));

let productOfArray = (arr) =>{
    if(arr.length===1){
        return arr[0];
    }
    return arr[0]*productOfArray(arr.slice(1));
}

// console.log(productOfArray([3,3,3,2]))

let recursiveRange = (num)=>{
    if(num===1){
        return 1;
    }
    return num + recursiveRange(num-1);
}

// console.log(recursiveRange(9))

let fib = (num)=>{
    if(num<=2){
        return 1;
    }
    return fib(num-1) +fib(num-2);

}

// console.log(fib(6));

// with helper functions

let reverse = (str)=>{
    let final = "";
    let helpReverse=(helpStr)=>{
        if(helpStr.length===0){
            return;
        }final+=helpStr[helpStr.length-1];
        helpReverse(helpStr.substring(0,helpStr.length-1));
    }
    helpReverse(str);
    return final;
}

// console.log(reverse("Linda Woo"))

let isPalindrome = (str)=>{
    if(str.length === 0|| str.length ===1){
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    return isPalindrome(str.substring(1,str.length-1));
}

// console.log(isPalindrome("aadgdbaa"));

let someRecursive = (arr,func)=>{
    if(arr.length===0){
        return false;
    
    }   
    if(func(arr[0])){
        return true;
    }
  
    return someRecursive(arr.slice(1),func);  
}



let greatherThanTen = num=> num>10;

// console.log(someRecursive([2,90,7],greatherThanTen));

let flatten = (arr)=>{
    let final = [];
    let flattenHelper = (arrHelper)=>{
        if(arrHelper.length===0){
            return;
        }
        if(!Array.isArray(arrHelper[0])){
            final.push(arrHelper[0]);
        } else{
            flattenHelper(arrHelper[0]);
        }
        flattenHelper(arrHelper.slice(1));
    }
    flattenHelper(arr);
    return final;
}


// console.log(flatten([[3,4],[1],[5,6],2]));

let capitalizeFirst = (arr) =>{
    let final = [];
    let helper = (helperArr) =>{
        if(helperArr.length===0){
            return;
        }
        final.push(helperArr[0][0].toUpperCase()+helperArr[0].slice(1));
        return helper(helperArr.slice(1));
    }
    helper(arr);
    return final;
}

// console.log(capitalizeFirst(["linda", "woo", "is", "capitalized!"]))

let nestedEvenSum = (obj) =>{
    let sum = 0;
    let helper = (helperObj)=>{
        for (var key in helperObj) {
            if (typeof helperObj[key] === 'object'){
                sum += nestedEvenSum(helperObj[key]);
            } else if (typeof helperObj[key] === 'number' && obj[key] % 2 === 0){
                sum += helperObj[key];
            }
        }
    }
    helper(obj);
    return sum;
}

// console.log(nestedEvenSum({dog:4,horse:3,cat:2}));

let capitalizeWords = (arr) =>{
    let final = [];
    let helper = (helperArr) =>{
        if(helperArr.length===0){
            return;
        }
        final.push(helperArr[0].toUpperCase());
        return helper(helperArr.slice(1));
    }
    helper(arr);
    return final;
}

// console.log(capitalizeWords(["linda","woo", "is", "now", "capitalized"]))

let stringifyNumbers = (obj)=>{
    let finalObj = {};
        for(let key in obj){
            if(typeof obj[key]==="object"&&!Array.isArray(obj[key])){
                finalObj[key]=stringifyNumbers(obj[key]);
            }
            else if(typeof obj[key]==="number"){
                    finalObj[key]=obj[key].toString();
                
            }
            else{
                finalObj[key]=obj[key];
            }
        }
    return finalObj
}
// console.log(stringifyNumbers({help:5,done:{number:4,title:"woo"}, anotherNumber:999,anArray:[], anotherWord: "linda"}));

let collectStrings = (obj)=>{
    let final = [];
    let helper = (helperObj)=>{
        for(let key in helperObj){
            console.log(helperObj[key]);
            if(typeof helperObj[key]==="object"){
             helper(helperObj[key]);
            }
            else if(typeof helperObj[key]==="string"){
                console.log("it's a string");
                    final.push(helperObj[key]); 
            }
        }
    }
    helper(obj);
    return final;

}

// console.log(collectStrings({coward: "burg",data:{one:"mary", two:2, three:"three"},moreData:90,anotherObj:{more:"more",aFew:4}}))