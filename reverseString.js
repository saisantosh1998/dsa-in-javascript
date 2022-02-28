// using o(1) approach
let swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
var reverseString = function(s) {
    for(let i=0;i<Math.floor(s.length/2);i++){
        swap(s,i,s.length-1-i);
    }
    return s
};