//Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
class Solution{
    getMinMax(arr,n){
         let min=Infinity;
    let max=0;
    if(arr.length===1){
        max=arr[0];
        min=arr[0];
    }
    let i=0;
    if(n%2!==0){
        max=arr[0];
        min=arr[0];
        let i=1;
        while(i<n-1){
        if(arr[i]<arr[i+1]){
            min=Math.min(min,arr[i]);
            max=Math.max(max,arr[i+1]);
        }else{
            min=Math.min(min,arr[i+1]);
            max=Math.max(max,arr[i]);
        }
        i+=2;
    }
        
    }else{
        while(i<n-1){
        if(arr[i]<arr[i+1]){
            min=Math.min(min,arr[i]);
            max=Math.max(max,arr[i+1]);
        }else{
            min=Math.min(min,arr[i+1]);
            max=Math.max(max,arr[i]);
        }
        i+=2;
    }
    }
    return [min,max];
    }
}
//comapring adjacent values minimizing number of comparisons