
function lcs(x, y, s1, s2)
{
    let dp=[...Array(x+1)].map(()=>Array(y+1))
    for(let i=0;i<x+1;i++){
        dp[i][0]=0;
    }
    for(let i=0;i<y+1;i++){
        dp[0][i]=0;
    }
    
    let sub=''
    for(let i=1;i<=x;i++){
        for(let j=1;j<=y;j++){
            if(s1[i-1]===s2[j-1]){
                dp[i][j]=1+dp[i-1][j-1];
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[x][y];
    
}
console.log(lcs(3,4,'ABC','ABCD'));
//Approach:Dynamic Programming
/*intially we create dp array of dimension x+1*y+1.and make first row and column zero to represent the cases when s1 is not empty and s2 is empty vice-versa.we traverse through dp to fill remaining spaces.if both substring at that positions for both strings are same we will add 1 to the previous diagonal element and add to present else we wioll take max element from above and left assign to present.and the final element in dp gives largest common subsequence length*/
