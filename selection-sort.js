

function selectionSort(arr) {

  // Copy the original array
  let newArr = arr.slice();
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(newArr.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = Infinity;
    let minIndex;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < min) {
        min = newArr[i];
        minIndex = i;
      }
    }
    // Save and remove the value at the min index
    let minAtIndx = newArr[minIndex];
    newArr.splice(minIndex,1);
    // Add the min value to the end of the sorted array
    sorted.push(minAtIndx);

  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
