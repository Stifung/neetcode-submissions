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
            let mid = Math.floor((lo + hi)/2);
            if(nums[mid] === target){
                return mid;
            } else if(nums[mid] > target){
                hi = mid - 1;
            } else if(nums[mid] < target){
                lo = mid + 1;
            }
        }
        return -1;
    }
}

/*
[0, 2, 3] target = 3
lo = 0
hi = 2
mid = Math.floor((0 + 2) / 2) = 1
mid = 1

decisions
2 === 3 ? false
2 > 3 ? false
2 < 3 ? true
lo = 2

lo = 2
hi = 2
mid = Math.floor((2 + 2)/2) = 2
mid = 2;

decisions
3 === 3 ? true
return mid -> return 2
 */
