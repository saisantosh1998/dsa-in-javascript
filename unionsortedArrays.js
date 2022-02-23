class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        let set=new Set();
        let i=0,j=0,k=0;
        while(i<n && j<m){
            if(a[i]<b[j]){
                set.add(a[i]);
                i++;
            }else if(a[i]>b[j]){
                set.add(b[j]);
                j++;
            }else{
                set.add(a[i]);
                i++;
                j++;
            }
        }
        while(i<n){
            set.add(a[i]);
            i++;
        }
        while(j<m){
            set.add(b[j]);
            j++;
        }
        return set.size;
    }
    
}