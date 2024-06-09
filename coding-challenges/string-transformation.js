function stringTransformRules(text) {
  const length = text.length;

  // 1. Check if the length is divisible by both 3 and 5
  if (length % 15 === 0) {
    // Reverse the text string
    // Transform characters to ASCII codes
    const reversedString = text.split("").reverse().join("");
    const asciiTransformed = reversedString
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
    return asciiTransformed;
  }
  // 2. Check if the length is divisible by 3 and reverse the text string if it is
  else if (length % 3 === 0) {
    return text.split("").reverse().join("");
  }
  // 3. Check if the length is divisible by 5 and transform characters to ASCII codes if it is
  else if (length % 5 === 0) {
    return text
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  // 4. Return the original text string If the length is not divisible by 3 or 5
  else {
    return text;
  }
}

// Eg:
console.log(stringTransformRules("Hamburger")); // Output: "regrubmaH"
console.log(stringTransformRules("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransformRules("Chocolate Chip Cookie")); // Output: "eikoocPihCetalocohC"
