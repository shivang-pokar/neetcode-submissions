class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let countRecord: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            countRecord[nums[i]] = 1 + (countRecord[nums[i]] || 0);
        }

        // 2. Sort the record and get the top k elements
        return (
            Object.entries(countRecord)
                // Sort by frequency (index 1 of the entry) in descending order
                .sort((a, b) => b[1] - a[1])
                // Grab the first 'k' elements
                .slice(0, k)
                // Extract the key (index 0) and convert it back to a number
                .map((entry) => Number(entry[0]))
        );
    }
}
