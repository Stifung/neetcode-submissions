class Solution {
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0;

        for(let num of nums){
            if(num === 1){
                currentCount ++;
            } else {
                if(currentCount > maxCount){
                    maxCount = currentCount;
                }
                currentCount = 0;
            }

        }
        return Math.max(maxCount, currentCount);
    }
}