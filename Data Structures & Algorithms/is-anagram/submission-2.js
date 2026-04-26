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
        const countS = {};
        const countT = {};
        for(let c in s){
            countS[s[c]] = (countS[s[c]] || 0) + 1;
            countT[t[c]] = (countT[t[c]] || 0) + 1;
        }
        for(let key in countS){
            if(countS[key] !== countT[key]){
                return false;
            }
        }
        return true;
    }
}
