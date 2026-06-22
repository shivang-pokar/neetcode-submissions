class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        
        let startToEnd = s
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

        let endToStart = s
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .split("")
            .reverse()
            .join("");

        return startToEnd == endToStart;
    }
}
