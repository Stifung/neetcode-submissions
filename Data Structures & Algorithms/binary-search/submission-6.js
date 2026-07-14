class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length - 1;
        while(lo <= hi){
            let middle = Math.floor((lo + hi)/2);
            if(nums[middle] === target){
                return middle;
            }
            else if(nums[middle] > target){
                hi = middle - 1;
            }
            else if(nums[middle] < target){
                lo = middle + 1;
            }
        }
        return -1;
    }
}


