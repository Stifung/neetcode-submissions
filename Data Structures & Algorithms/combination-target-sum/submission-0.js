class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        function backtracking(combination, sum, start){
            if(sum === target){
                result.push([...combination]);
                return;
            }
            if(sum > target){
                return;
            }
            for(let i = start; i < nums.length; i++){
                combination.push(nums[i]);
                backtracking(combination, sum + nums[i], i);
                combination.pop();
            }
        }
        backtracking([], 0, 0);
        return result;
    }
}
