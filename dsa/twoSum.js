function getTwoSum(arr, target){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i, j]
            }
        }
    }

}

function twoSum(arr, target){
    let seen = new Map();
    for(let i=0; i< arr.length; i++){
        let needed = target - arr[i];
        if(seen.get(needed)){
            return [seen.get(needed), i]
        }
        seen.set(arr[i], i)
    }
}

console.log('two sum indices: ', twoSum([3,2,4], 6))
