class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return JSON.stringify(strs);

        let result = "";
        for (let str of strs) {
            result += `${str.length}#${str}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        //let plainString = atob(str);
        return JSON.parse(str);
    }
}
