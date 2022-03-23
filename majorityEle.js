function majorityElement(arr, size)
{
    if(size===1){
        return arr[0]
    }
    let count={};
    let maxCount=0,maxEle=-1;
    for(let i=0;i<arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]+=1
        }else{
            count[arr[i]]=1
        }
    }
    for(let [key,value] of Object.entries(count)){
        if(value>maxCount){
            maxCount=Math.max(maxCount,value)
            maxEle=key
        }
    }
     return maxCount>Math.floor(size/2)?maxEle:-1;
}
// Approach using hash map 
function majorityElement(arr, size)
{
    if(size===1){
        return arr[0]
    }
    let count={};
    let maxCount=0,maxEle=-1;
    for(let i=0;i<arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]+=1
        }else{
            count[arr[i]]=1
        }
    }
    for(let [key,value] of Object.entries(count)){
        if(value>maxCount){
            maxCount=Math.max(maxCount,value)
            maxEle=key
        }
    }
     return maxCount>Math.floor(size/2)?maxEle:-1;
}
// Approach(moores voting algorithm)
/*here we are canceling the majority element with minority element finally after first traverse we have to check wheter the element is greater thn n/2 or not and return value respectively*/