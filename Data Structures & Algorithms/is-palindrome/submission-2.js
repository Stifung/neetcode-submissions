class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s){
        if(!s || s.length <= 1){
            return true;
        }
        let left = 0;
        let right = s.length -1;
        while(left < right){
            while(left < right && !this.isAlphaNumeric(s.charCodeAt(left))){
                left ++;
            }
            while(left < right && !this.isAlphaNumeric(s.charCodeAt(right))){
                right --;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left ++;
            right --;
        }
        return true;
    }

        isAlphaNumeric(code){
        return(
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }
}
