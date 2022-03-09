function maxSubStr(str)
{
    let start=0,zeroSoFar=0,oneSoFar=0;
    let strings=[];
    for(let i=0;i<str.length;i++){
        if(str[i]==='0'){
            zeroSoFar+=1;
        }else{
            oneSoFar+=1;
        }
        console.log(zeroSoFar,oneSoFar);
        if(zeroSoFar===oneSoFar){
            strings.push(str.substring(start,i+1));
            start=i+1;
        }
    }
    return strings;
}
console.log(maxSubStr('0000000000'));
// approach
/*while travesing through the string and counting zeros and ones so far if they are equal we will add that string to the answer array*/