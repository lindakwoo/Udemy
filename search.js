function linearSearch(arr, value){
    let i=0;
    for(let item of arr){
        if(item===value){
            return i;
        }
        i++;
    }
    return -1;
  }

//   console.log(linearSearch([7,5,6,4],10))


  function binarySearch(arr,num){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor(((end-start)/2)+start);
    console.log(start, end, mid);
    while(start!==end){
        if(arr[mid]===num){
            return mid;
        }
       else if(arr[mid]>num){
            end = mid-1;
            mid = Math.floor(((end-start)/2)+start);
        }
        else {
            start = mid+1;
            mid = Math.floor(((end-start)/2)+start);
        }

        console.log(start, end, mid);
    }
    if(arr[start]===num){
        return start;
    }
    return -1;
}

// console.log(binarySearch([1,3,5,12,34,56],9));

// let naiveSearch = (short, long)=>{
//     console.log(short.length,long.length);
//     let counter = 0;
//     let j;
//     for(let i = 0;i<(long.length-short.length);i++){
//         j=0;
//         while(j<short.length){
//             if(short[j]===long[i+j]){
//                 if(j===short.length-1){
//                     counter++;
//                     j++;
//                 }
//                 else{
//                     j++;
//                 }
//             }
//             else {
//                 j=short.length;
//             }
//         }
//     }
//     return counter;
// }

// console.log(naiveSearch("apa", "appapapae"))

let naiveSearch = (short, long)=>{
    console.log(short.length,long.length);
    let counter = 0;
    for(let i = 0;i<(long.length-short.length);i++){
        for(let j = 0;j<short.length;j++){
            if(short[j]!==long[i+j]) break;
            if(j===short.length-1) counter++;
        }
    }
    return counter;
}

// console.log(naiveSearch("apa", "appapapae"))