class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(!heights || heights < 2){
            return 0;
        }
        let left = 0;
        let right = heights.length -1;
        let maxWater = 0;
        while(left < right){
            let currentWidth = right - left;
            let currentHeight = Math.min(heights[left], heights[right]);
            let currentArea = currentHeight * currentWidth;

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
