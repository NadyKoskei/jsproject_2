(function (global) {
  // Reverse the text so the last character comes first.
  function reverseString(value) {
    if (value === undefined || value === null) {
      return "";
    }

    return String(value).split("").reverse().join("");
  }

  // Count how many characters are in the string.
  function countCharacters(value) {
    if (value === undefined || value === null) {
      return 0;
    }

    return String(value).length;
  }

  // Make the first letter of every word uppercase.
  function capitalizeWords(value) {
    if (value === undefined || value === null) {
      return "";
    }

    return String(value)
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        if (!word) {
          return "";
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  // Expose these functions so the page can use them.
  const api = {
    reverseString: reverseString,
    countCharacters: countCharacters,
    capitalizeWords: capitalizeWords,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.stringFunctions = api;
})(typeof window !== "undefined" ? window : globalThis);
