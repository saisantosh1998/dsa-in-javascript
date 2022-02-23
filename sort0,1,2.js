function swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}
class Solution {
    
    sort012(arr, N)
    {
        let low=0,mid=0,high=N-1;
        while(mid<=high){
            if(arr[mid]===0){
                swap(arr,low,mid);
                low++;
                mid++;
            } else if(arr[mid]===2){
                swap(arr,high,mid);
                high--;
            } else{
                mid++
            }
        }
    }
}