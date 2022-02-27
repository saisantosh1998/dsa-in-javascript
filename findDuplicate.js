var findDuplicate = function(nums) {
    let t=nums[0],h=nums[0];
     do{
             t=nums[t];
             h=nums[nums[h]];
         } while (t!=h);
         t=nums[0];
         while (t!=h){
             t=nums[t];
             h=nums[h];
         }
         return h;
 };