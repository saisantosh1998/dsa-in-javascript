function LongestRepeatingSubsequence(str){
    let sub;
    let count={};
    let maxLen=0;
    for(let i=0;i<str.length;i++){
        if(str[i] in count){
            count[str[i]]+=1;
            if(count[str[i]]===2){
                maxLen=1;
            }
        }else{
            count[str[i]]=1;
        }
    }
    
    for(let i=0;i<str.length;i++){
        sub=str[i];
        for(let j=i+1;j<str.length;j++){
            sub+=str[j];
            if(sub in count){
            count[sub]+=1;
            if(count[sub]===2){
                maxLen=Math.max(maxLen,sub.length);
            }
        }else{
            count[sub]=1;
        }
        }
    }
    console.log(maxLen);
}