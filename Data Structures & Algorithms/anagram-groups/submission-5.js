class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let s of strs){
            const count = s.split('').sort().join();
            if(!res[count]){
                res[count] = [];
            }
            res[count].push(s);
        }
        return Object.values(res);
    }
}
