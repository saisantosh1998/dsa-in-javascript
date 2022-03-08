class Solution{
    LongestRepeatingSubsequence(str){
        let n=str.length;
        let dp=[...Array(n+1)].map(()=>Array(n+1));
        for(let i=0;i<n+1;i++){
             for(let j=0;j<n+1;j++){
                 if(i===0 || j===0){
                     dp[i][j]=0;
                 }else if(str[i-1]===str[j-1] && i!=j){
                     dp[i][j]=1+dp[i-1][j-1];
                 }else{
                      dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
                 }
        }
        }
        return dp[n][n];
    }
}
// same approach as longets commom subsequence only difference using same string twice and excluding index of same while increasing value;