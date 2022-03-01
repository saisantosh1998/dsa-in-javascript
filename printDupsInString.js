function printDups(str)
{
    var count = {};
    for (var i = 0; i < str.length; i++) {
        count[str[i]] = 0;
    }
     
    for (var i = 0; i < str.length; i++) {
        count[str[i]]++;
    }
 
    return Object.keys(count);
}