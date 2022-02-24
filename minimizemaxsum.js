class Solution {

    getMinDiff(arr, N, K) {
        // your code here
       arr.sort((a,b)=>{
            return a-b;
        });
        let min=arr[0];
        let max=arr[N-1];
        let diff=max-min;
        for(let i=1;i<N;i++){
            if(arr[i]>=K){
                 min=Math.min(arr[0] + K,arr[i]-K);
            max=Math.max(arr[N-1]-K,arr[i-1]+K);
            diff=Math.min(diff,max-min);
            }
           
        }
        return diff;
    }
}