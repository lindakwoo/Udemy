// function addUpTo(n){
//     let total = 0;
//     for(i=1;i<=n;i++){
//         total+=i;
//     }
//     return total;
// }



// function addUpTo2(n){
//     return n*(n+1)/2;
// }

// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();
// console.log(`addUpTo total time: ${(t2-t1)/1000}`)


// let s1 = performance.now();
// console.log(addUpTo2(10000000000000000));
// let s2 = performance.now();
// console.log(`addUpTo total time: ${(s2-s1)/1000}`)

let same = (arr1, arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    let obj = {};
    for(let num of arr1){
      obj[num*num]= (obj[num*num]||0) +1;
    }
    console.log(obj);
   for(let num of arr2){
       if(!obj[num]){
           return false;
       }else{
           obj[num]--;
       }
    //    if(obj[num]<0){
    //        return false;
    //    }
   }
   return true;
}

// console.log(same([1,2,1,3,3,3,4],[4,1,9,9,9,9,3]))


function sameFrequency(num1,num2){
    let numOne = num1.toString().split("");
    let numTwo = num2.toString().split("");
    if(numOne.length!==numTwo.length){
        return false;
    }
    let obj = {};
    for(let num of numOne){
        obj[num]=(obj[num]||0)+1;
    }
    console.log(obj);
    
    for(let num of numTwo){
        if(!obj[num]){
            return false;
        }else{
            obj[num]--;
        }
    }
    return true;
  }

//   console.log(sameFrequency(973,763))

  function areThereDuplicates() {
    let obj = {};
    for(let item of arguments){
        if(obj[item]){
            return true;
        }else {
            obj[item]=1;
        }
    }
    return false;
  }

//   console.log(areThereDuplicates(5,4,3,4,7));

//   console.log(areThereDuplicates("a", "d","g"));
let averagePair = (arr,average) =>  {
    let obj ={};
    for(item of arr){
        if(obj[(average*2)-item]){
            return true;
        }
        obj[item]=1;
   }
   return false;

}

// console.log(averagePair([-1,2,3,4,5],2))

let isSubsequence = (sub, str) => {
    if(sub.length<1){
        if(str.length<1){
            return true;
        }
        return false;
    }
    let i=0;
  
        for(let j=0;j<str.length;j++){
            if(sub[i]===str[j]){
                i++;
            }
            if(i>sub.length-1){
                return true;
            }
        }
        return false;
}

//   console.log(isSubsequence("sing", "sting"));

  let maxSubarraySum = (arr,num)=> {
    if(arr.length === 0){
        return null;
    }
    if(num>arr.length){
        return null;
    }
    let sum = 0;
    for(let i = 0;i<num;i++){
        sum +=arr[i]; 
    }
    let max = sum;
    for (i=num; i<arr.length;i++){
        sum = sum - arr[i-num] + arr[i];
        max = Math.max(sum, max);
    }
    return max;
   
  }

//   console.log(maxSubarraySum([100,200,300,400,300,200,500,600,200,200,800],3));

let minSubArrayLen = (arr,num) =>{
    let min = Infinity;
    let count = 1;
    let i = 1;
    let beg = 0;
    let end = 0;
    let sum =arr[0];
    if(sum>=num){
        return 1;
    }
    while(i<arr.length){
        sum+=arr[i];
        end++;
        count++;
        while(sum>=num){
            min = Math.min(min,count);
            if(count>1){
                sum = sum-arr[beg];
                beg++;
                count--;
            }else{
                return 1;
            }
        }
        i++
    }
    if(min===Infinity){
        return 0;
    }else{
        return min;
    }

}

// console.log(minSubArrayLen([6,8,7,2,5,13,8],20))

let today = new Date()
console.log(today.toString());
let plusMin = today.setMinutes(today.getMinutes() + 15);
let newTime = new Date(plusMin)
console.log(newTime.toString())
let anotherDay = new Date();
let eightAM = anotherDay.setHours(8,0,0);
let newHour = new Date(eightAM);
console.log(newHour.toString());

let teachersched = [{hour: 1,status:"free"},{hour: 2,status:"busy"},{hour: 3,status:"free"},{hour: 4,status:"free"},{hour: 5,staus:"free"},{hour: 6,status:"busy"},{hour: 7,status:"busy"}]

let studentsched =  [{hour: 1,status:"free"},{hour: 2,status:"free"},{hour: 3,status:"free"},{hour: 4,status:"busy"},{hour: 5,staus:"free"},{hour: 6,status:"busy"},{hour: 7,status:"busy"}]

let match = teachersched.filter((obj,index) =>{
    return obj.status ==="free" && studentsched[index].status==="free"
})

// console.log(match)

