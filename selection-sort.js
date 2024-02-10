

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
debugger;
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = Infinity;
    let minIndex;
    for (let i = divider; i < arr.length; i++) {
      if (arr[i] < min) {
        // Save the min value
        min = arr[i];
        minIndex = i;
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1
    arr.splice(divider,0,min);
    minIndex = minIndex +  1
    arr.splice(minIndex,1);
    // Put the min value at the divider
    divider++
    


    // Increment the divider and repeat

  }
}
debugger;
let newArr = [2,4,6,8,1,3,5,7,9];
selectionSortInPlace(newArr)


module.exports = [selectionSort, selectionSortInPlace];
