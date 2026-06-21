class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map<string, string[]>();

        for (let st of strs) {
            let sortedString = st.split("").sort().join("");

            if (!anagramMap.has(sortedString)) {
                anagramMap.set(sortedString, []);
            }

            anagramMap.get(sortedString).push(st);
        }

        return Array.from(anagramMap.values());
    }
}
