class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let s of strs){
            const countS = s.split('').sort().join();
            if(!res[countS]){
                res[countS] = [];
            }
            res[countS].push(s);
        }
        return Object.values(res);
    }
}
