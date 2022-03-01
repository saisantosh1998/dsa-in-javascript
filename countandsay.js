//leetcode count and say
var countAndSay = function (n) {
    let res = '1';
    if (n === 1) return res;
    let charpoint = 0, countpoint = 0, stringInProgress = '';
    while (n > 1) {
        while (countpoint < res.length) {
            while (res.charAt(charpoint) === res.charAt(countpoint)) {
                countpoint++;
            }
            stringInProgress += `${countpoint - charpoint}${res.charAt(charpoint)}`;
            charpoint = countpoint;
        }
        res = stringInProgress;
        stringInProgress = '';
        n--;
        charpoint = 0;
        countpoint = 0;
    }
    return res;
};