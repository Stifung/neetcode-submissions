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
       let countS = s.split('').sort().join();
       let countT = t.split('').sort().join();

       return countS == countT;
    }
}
