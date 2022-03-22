
function findTwoElement(arr, n) {
	let xor1=arr[0],x=0,y=0;
	for (let i = 1; i < n; i++)
		xor1 = xor1 ^ arr[i];
	for (let i = 1; i <= n; i++)
		xor1 = xor1 ^ i;
	let setBitNo = xor1 & ~(xor1 - 1);
	for (let i = 0; i < n; i++) {
		if (arr[i] & setBitNo !== 0) {
			x=x^arr[i]
		} else {
			y=y^arr[i];
		}
	}
	for (let i = 1; i <= n; i++) {
		if (i & setBitNo !== 0) {
			x=x^i;
		} else {
			y=y^i;
		}
	}
	
	return arr.includes(y)?`${y} ${x}`:`${x} ${y}`
}
console.log(findTwoElement([1,3,3], 3));
//Approach
/*find the xor of all array elements and natural elements xor the both valaues gives xor of repeat and missing xor.find themost significant bit and seperate the values by xor with set bit finally the two diff xors will be there search which is in array display accordingly  */