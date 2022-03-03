function allSequesnces(str){
    let allSequesnces=[];
    let n=str.length;
    for(let i=0;i<(1<<n);i++){
        let seq='';
        for(let j=0;j<n;j++){
            if((i&(1<<j))!==0){
                seq+=str[j];
            }
        }
        allSequesnces.push(seq);
    }
    return allSequesnces;
}
console.log(allSequesnces('abc'));
//Approach
/*the power set can be obtained of a str is 2^n if we right all the numbers upto 2^n-1 and convert into binary form if there is one in it it will have substring of it eg:let our string is abc and number is 100 then c is one of sequence because binary we go from rightmost value to find there is 1 in certain position we need to do and bitwise with 1 at that position and remaining zeroa if we get 1 then it is 1 else it is 0 eg;- for 100 to find 1 is at 2nd position we need do 100&(1<<2)where (1<<2) give 100.*/
/*refer striver vedio on power set */