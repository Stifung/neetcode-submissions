class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let i of strs){
            let countS = i.split('').sort().join();
            if(!res[countS]){
                res[countS] = [];
            }
            res[countS].push(i);
        }
        return Object.values(res);
    }
}
