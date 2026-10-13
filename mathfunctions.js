(function (global) {
  // Calculate the factorial of a number like 5! = 5 * 4 * 3 * 2 * 1.
  function factorial(number) {
    if (!Number.isInteger(number) || number < 0) {
      return "Please enter a non-negative integer.";
    }

    if (number === 0 || number === 1) {
      return 1;
    }

    let total = 1;
    for (let i = 2; i <= number; i += 1) {
      total *= i;
    }

    return total;
  }

  // Check whether the value is a prime number.
  function isPrime(number) {
    if (!Number.isInteger(number) || number < 2) {
      return false;
    }

    if (number === 2) {
      return true;
    }

    if (number % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  // Build the Fibonacci sequence up to the requested number of terms.
  function generateFibonacciSequence(terms) {
    if (!Number.isInteger(terms) || terms <= 0) {
      return [];
    }

    const sequence = [0, 1];

    for (let i = 2; i < terms; i += 1) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, terms);
  }

  // Make the math tools available to the page.
  const api = {
    factorial: factorial,
    isPrime: isPrime,
    generateFibonacciSequence: generateFibonacciSequence,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.mathFunctions = api;
})(typeof window !== "undefined" ? window : globalThis);
