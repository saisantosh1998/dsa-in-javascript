class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
             let maxint = Math.pow(2, 53)
let max_so_far = -maxint - 1
let max_ending_here = 0
  
for (let i = 0; i < N; i++)
{
   max_ending_here = max_ending_here + arr[i]
   if (max_so_far < max_ending_here)
       max_so_far = max_ending_here

   if (max_ending_here < 0)
       max_ending_here = 0 
}
return max_so_far
    } 
}