class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const countS = s.split('').sort().join();
        const countT = t.split('').sort().join();

        return countS == countT;
    }
}
