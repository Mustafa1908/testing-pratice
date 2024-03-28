function analyzeArray(array) {
  let arrayObject = { average: 0, min: 0, max: 0, length: array.length };
  let average = 0;
  let min = array[0];
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    average += array[i];

    if (array[i] < min) {
      min = array[i];
      console.log(min);
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  arrayObject.min = min;
  arrayObject.max = max;
  arrayObject.average = average / array.length;

  return arrayObject;
}

export default analyzeArray;
