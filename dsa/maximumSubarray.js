// function maximumSubarray(arr){
//     let maximumSumObj = {
//         sum: 0, 
//         subArray: []
//     }; 
//     let maxSubSubarray = [];

//     for(let i=0; i<arr.length; i++){
//         for(let j=arr.length; j>i; j--){
//             let subArr = arr.slice(i+1, j);
//             let sum = arr[i] + subArr.reduce((x,y) => {
//                 return x+y }, 0)
//             if (sum > maximumSumObj.sum) {
//                 maximumSumObj.sum = sum;
//                 maximumSumObj.subArray = [arr[i],...subArr]
//             }
//         }
//     }
//     return maximumSumObj;
// }

// function maximumSubarray(arr) {
//     let cur = arr[0], best = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         cur = Math.max(arr[i], cur + arr[i]);  // extend or restart
//         console.log('cur: ', cur)
//         best = Math.max(best, cur);
//         console.log('best: ', best)
//     }
//     return best;
// }

function maximumSubarray(arr) {
    let cur = arr[0], best = arr[0];
    let start = 0, bestStart = 0, bestEnd = 0;

    for (let i = 1; i < arr.length; i++) {
        if (cur < 0) {          // negative prefix only hurts, so drop it
            cur = arr[i];
            start = i;
        } else {                // still worth carrying, so extend
            cur += arr[i];
        }
        if (cur > best) {
            best = cur;
            bestStart = start;
            bestEnd = i;
        }
    }
    return { sum: best, subArray: arr.slice(bestStart, bestEnd + 1) };
}

console.log("Maximum sum Sub Array: ", maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log("Maximum sum Sub Array: ", maximumSubarray([1]))
console.log("Maximum sum Sub Array: ", maximumSubarray([5, 4, -1, 7, 8]))
console.log("Maximum sum Sub Array: ", maximumSubarray([-3, -1, -2]))
