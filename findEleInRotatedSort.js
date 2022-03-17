var search = function(nums, target) {
    let [left,right]=[0,nums.length-1];
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]>=nums[left]){
            if(target>=nums[left] && target<=nums[mid])right=mid-1;
            else left=mid+1;
        }else{
            if(target>=nums[mid] && target<=nums[right])left=mid+1;
            else right=mid-1;
        }
    }
    return -1
};
// Approach O(log n)
/*if we can onserve the array if we pick one element it will have either left side or right side sorted we will check target present in that array or not and remove that side if not and go on */