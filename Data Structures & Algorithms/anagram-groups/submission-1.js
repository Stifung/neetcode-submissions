class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let i of strs){
            const sortedS = i.split('').sort().join();
            if(!res[sortedS]){
                res[sortedS] = [];
            }
            res[sortedS].push(i);
        }
        return Object.values(res);
    }
}
