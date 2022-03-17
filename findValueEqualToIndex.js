class Solution{
    valueEqualToIndex(arr,n){
        let ans=[];
        for(let i=1;i<n+1;i++){
            if(arr[i-1]==i){
                ans.push(arr[i-1]);
            }
        }
        return ans.length>0?ans:['Not Found']
    }
}
