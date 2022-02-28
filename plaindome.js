class Solution {
    isPalindrome(S){
    const len = S.length;
    for (let i = 0; i < len / 2; i++) {
        if (S[i] !== S[len - 1 - i]) {
            return 0;
        }
    }
    return 1;
    }
}