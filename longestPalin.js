function isPalin(str) {
    let n = str.length;
    for (let i = 0; i < n / 2; i++) {
        if (str[i] !== str[n - 1 - i]) {
            return false;
        }
    }
    return true
}
function longestPalin(S) {
    let palins = {};
    for (let i = 0; i < S.length; i++) {
        let sub = S[i]
        for (let j = i+1; j < S.length; j++) {
            sub += S[j];
            if (isPalin(sub)) {
                if (!palins.hasOwnProperty(sub.length)) {
                    palins[sub.length] = sub;
                }
            }
        }
    }
    return Object.keys(palins).length>0?palins[Object.keys(palins)[Object.keys(palins).length-1]]:S[0];
}
console.log(longestPalin('abc'));
//Approach:O(n^3)
/*traverse for getting all sub strings and check for palindrome ans store them in object with key as length and print the last key of that object if it has oalins if not first one will be largest palin */

function longestPalin(S) {
    let n = S.length;
    let arr = [...Array(n)].map(() => Array(n).fill(0));
    let maxLen = 1;
    let start = 0;
    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
        if (i < n - 1) {
            if (S[i] === S[i + 1]) {
                arr[i][i + 1] = 1;
                if(maxLen!=2){
                    maxLen = 2;
                    start = i;
                }
            } else {
                arr[i][i + 1] = 0;
            }
        }
    }
    for (let k = 3; k <= n; k++) {
        for (let i = 0; i < n - k + 1; i++) {
            let j = i + k - 1;
            if (arr[i + 1][j - 1]
                && S[i] == S[j]) {
                arr[i][j] = 1;
                if (k > maxLen) {
                    start = i;
                    maxLen = k;
                }
            }
        }
    }
    return S.substr(start, maxLen);
}
console.log(longestPalin('kjqlrzzfmlvyoshiktodnsjjp'));
//Approach:Dynamic Programming(O(n^2))
/*1.Maintain a boolean table[n][n] that is filled in bottom up manner.
2.The value of table[i][j] is true, if the substring is palindrome, otherwise false.
3.To calculate table[i][j], check the value of table[i+1][j-1], if the value is true and str[i] is same as str[j], then we make table[i][j] true.
4.Otherwise, the value of table[i][j] is made false.
5.We have to fill table previously for substring of length = 1 and length =2 because 
as we are finding , if table[i+1][j-1] is true or false , so in case of 
(i) length == 1 , lets say i=2 , j=2 and i+1,j-1 doesn’t lies between [i , j] 
(ii) length == 2 ,lets say i=2 , j=3 and i+1,j-1 again doesn’t lies between [i , j].
since,it is of length 1 we directly make table[i][i] as true.for length 2 we will compare i and i+1 are equal or not and we will update in table accordingly.*/
