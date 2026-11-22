function getTwoSum(arr, target){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i, j]
            }
        }
    }

}

console.log('two sum indices: ', getTwoSum([3,2,4], 6))
