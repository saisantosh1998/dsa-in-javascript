function segregateElements(arr, n) {
    let temp = new Array(n);


    let j = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] >= 0)
            temp[j++] = arr[i];


    if (j == n || j == 0)
        return;

    for (let i = 0; i < n; i++)
        if (arr[i] < 0)
            temp[j++] = arr[i];

    for (let i = 0; i < n; i++) arr[i] = temp[i];
}