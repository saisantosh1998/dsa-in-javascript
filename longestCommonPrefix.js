var longestCommonPrefix = function(strs) {
    if(strs.length===1) return strs[0]
if(strs.length===0) return ''
    let commonPrefix=function(first,second){
         let prefix='';
        let j=0;
         while(j<first.length && j<second.length){
        if(first[j]!=second[j]){
            break;
        }
        prefix+=first[j];
        j++;
    }
        return prefix
    }
    let prefix=commonPrefix(strs[0],strs[1]);

let ans='';
for(let i=2;i<strs.length;i++){
    prefix=commonPrefix(prefix,strs[i]);
}
return prefix

};