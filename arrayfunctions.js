(function (global) {
  // Return the largest number from the array.
  function findMaxNumber(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return null;
    }

    return Math.max.apply(null, numbers);
  }

  // Return the smallest number from the array.
  function findMinNumber(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return null;
    }

    return Math.min.apply(null, numbers);
  }

  // Add all the numbers together.
  function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      return 0;
    }

    return numbers.reduce(function (total, value) {
      return total + Number(value);
    }, 0);
  }

  // Keep only the items that match a condition.
  function filterArray(numbers, condition) {
    if (!Array.isArray(numbers)) {
      return [];
    }

    if (typeof condition === "function") {
      return numbers.filter(condition);
    }

    if (typeof condition === "string") {
      const test = new Function("value", "return " + condition + ";");
      return numbers.filter(function (value) {
        return test(value);
      });
    }

    return numbers;
  }

  // Share the array functions with the page.
  const api = {
    findMaxNumber: findMaxNumber,
    findMinNumber: findMinNumber,
    sumArray: sumArray,
    filterArray: filterArray,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.arrayFunctions = api;
})(typeof window !== "undefined" ? window : globalThis);
