// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let left = 0; // left pointer
    let right = arr.length -1 // right pointer
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === num) {
            count++;
            left++;
            right--;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }
    return count;
}
