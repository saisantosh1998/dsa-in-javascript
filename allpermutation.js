function find_permutation_recur(ds,map,ans,S){
    if(ds.length===S.length){
        ans.push(ds.join(''));
        return;
    }
    for(let i=0;i<S.length;i++){
        if(!map[S[i]]){
           ds.push(S[i]);
           map[S[i]]=true;
           find_permutation_recur(ds,map,ans,S);
           map[S[i]]=false;
           ds.pop();
        }
    }

}
function find_permutation(S){
    let ds=[];
    let map={};
    let ans=[];
    find_permutation_recur(ds,map,ans,S.split('').sort().join(''));
    return ans;
}
console.log(find_permutation('lrj'));
// recursion approach
/*traversing through the string take one character from string if it is not in map add to an array and making it true in a map and again calling the function with this updated map and ds until ds lenght equal to string length and  so that it will form a combination with all character when it is equal and we join all character in ds and add to ans array we will stop recursion and make map value as false and removes last fro ds since it is recently added one.like that we do same for all characters in string and we get totally n! combinations */


function find_permutation_recur(index,ans,S){
    if(index===S.length){
        if(!ans.includes(S))
        ans.push(S);
        return;
    }
    for(let i=0;i<S.length;i++){
        S=swap(S,i,index);
        find_permutation_recur(index+1,ans,S);
        S=swap(S,i,index);
    }

}
let swap=(str,i,j)=>{
    let arr=str.split('');
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    str=arr.join('');
    return str; 
}
function find_permutation(S){
    let ans=[];
    let index=0
    find_permutation_recur(index,ans,S.split('').sort().join(''));
    return ans;
}
console.log(find_permutation('lrj'));
// recursion approach
/*traversing through the string take a pointer with first position and swap with first char and change pointer to next position and do recursion end the recursion when pointer is equal to str length we will return nothing and after return of each recursion we will swap the elements to its back position */