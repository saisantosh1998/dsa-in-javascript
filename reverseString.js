// using o(1) approach
function reverse(s){ 
   for(let i=0;i<Math.floor(s.length/2);i++){
        s=swap(s,i,s.length-1-i);
    }
    return s
}
let swap=(str,i,j)=>{
    let sb=str.split('');
    sb[i]=str[j];
    sb[j]=str[i];
    str=sb.join('');
    return str
}
