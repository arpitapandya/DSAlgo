/**
 * The function relies on the fact that the array is sorted to calculate 
 * the running average of every two numbers.
 * It does this by putting one pointer at the start of the array
 * and one pointer at the end of the array.
 * 
 * If the average is less thab the target num, move the left pointer up, 
 * while the right can stay. Otherwise if the average is greater than the sum,
 * move the pointer down.
 * 
 * The function ends when we find correct average, or the pointers have crossed paths.
 */



// add whatever parameters you deem necessary
function averagePair(array, num) {
    let left = 0; // left pointer
    let right = array.length - 1; // right pointer

    while (left < right) {
        let avg = (array[left] + array[right]) / 2
        if (avg === num) {
            return true;
        } else if (avg < num) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
