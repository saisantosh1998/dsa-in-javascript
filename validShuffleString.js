function shuffleCheck(first,second,result){
    if(first.length + second.length != result.length) {
        return false;
      }
      
      let i = 0, j = 0, k = 0;
      while (k != result.length) {
        if (i < first.length && first[i] === result[k]){
            i++;
        } 
        else if (j < second.length && second[j] === result[k]){
            j++;
        }
        else {
          return false;
        }
        k++;
      }
      if(i < first.length || j < second.length) {
        return false;
      }
    
      return true;
}
