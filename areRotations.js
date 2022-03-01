class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {  
       if(s1.length!==s2.length)return 0;
       s1=s1+s1;
       return s1.includes(s2)?1:0;
    
    }
}