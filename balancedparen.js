class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        let leftparen=["{", "(", "["];
        let map={"}":"{",")":"(","]":"["};
        let stack=[];
        let left=0;
        for(let i=0;i<x.length;i++){
            if(leftparen.includes(x[i])){
                stack.push(x[i]);
            }else{
                left+=1;
                if(stack[stack.length-1]===map[x[i]]){
                    stack.pop();
                    left-=1;
                }
            }
        }
        if(stack.length>0 || left>0){
            return false;
        }
        return true;
    }
}