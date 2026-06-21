class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const str = JSON.stringify(strs);
        return btoa(str)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let plainString = atob(str);
        return JSON.parse(plainString)
    }
}
