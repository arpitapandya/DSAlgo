// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);
    let pivotIdx = -1;
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        if (leftSum === rightSum) {
            pivotIdx = i;
            break;
        }
        rightSum -= nums[i];
    }
    return pivotIdx;
}
