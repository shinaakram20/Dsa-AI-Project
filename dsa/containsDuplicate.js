function containsDuplicate(arr){
    let seen = new Set();
    for(let i=0; i<arr.length; i++){
        if(seen.has(arr[i])){
            return true;
        }
        seen.add(arr[i])
    }
    return false;
}

console.log("Contains Duplicate: ", containsDuplicate([0,2,3,4,1,1]))