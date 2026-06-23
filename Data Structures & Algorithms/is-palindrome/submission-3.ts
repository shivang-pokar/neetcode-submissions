class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
        let strNumberStart = "";
        let strNumberBack = "";
        for (let i = 0; i < str.length; i++) {
            strNumberStart = `${strNumberStart}` + `${str[i]}`
        }
        for (let i = str.length - 1; i >= 0; i--) {
            strNumberBack = `${strNumberBack}` + `${str[i]}`
        }

        return strNumberStart == strNumberBack
    }
}
