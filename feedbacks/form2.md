# Feedback - Form2 Task

## Positive Points

**Task Completion**

- You successfully implemented the function to calculate age from birth year.
- The application works correctly.

**Code Quality**

- Excellent use of `const` for variable declarations.
- Great use of `parseInt()` to convert the input to a number.
- Good use of `new Date().getFullYear()` to get the current year dynamically.
- Clean, readable code structure.

## Areas for Improvement

**Display Result in HTML, Not Console**

**Input Validation**

Consider adding validation to check if the user entered a valid birth year:

```javascript
function showAge() {
  const bYear = parseInt(document.getElementById("birthYear").value);

  if (isNaN(bYear) || bYear < 1900 || bYear > new Date().getFullYear()) {
    alert("Please enter a valid birth year");
    return;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - bYear;
  document.getElementById("result").textContent = `Your age is: ${age} years`;
}
```

**Modern JavaScript Practices**

Consider using event listeners in JavaScript instead of inline `onclick`.

**HTML Title**

The title is still "Document" - consider making it more descriptive like "Age Calculator".

## Summary

Great work on the core functionality! The calculation logic is correct and well-implemented. The main improvement needed is:

1. Display the result in the HTML instead of the console.
2. Add input validation for better user experience.
3. Consider using `addEventListener` for modern best practices.

Keep it up!
