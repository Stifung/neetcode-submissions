class Solution {
    findMaxConsecutiveOnes(nums){
        let maxConsecutive = 0;
        let currentConsecutive = 0;
        for(let i of nums){
            if(i === 1){
                currentConsecutive++;
            } else {
                if(currentConsecutive > maxConsecutive){
                    maxConsecutive = currentConsecutive;
                }
                currentConsecutive = 0;
            }
        }
        return Math.max(maxConsecutive, currentConsecutive);
    }
}