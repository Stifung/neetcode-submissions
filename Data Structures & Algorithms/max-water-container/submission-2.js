class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(!heights || heights.length < 2){
            return 0;
        }

        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while(left < right){
            let width =  right - left;
            let height = Math.min(heights[left], heights[right]);
            let currentArea = width * height;

            if(currentArea > maxWater){
                maxWater = currentArea;
            }
            if(heights[left] < heights[right]){
                left ++;
            } else {
                right --;
            }
        }
        return maxWater;
    }
}
