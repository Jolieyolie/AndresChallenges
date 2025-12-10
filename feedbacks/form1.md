# Feedback - Form1 Task

## Positive Points

**Task Completion**

- You successfully implemented the function to multiply a number by 2.
- The application works as expected.

## Areas for Improvement

**Display Result in HTML, Not Console**

The task specifically asks to display "The result is then displayed in your HTML," but you're using `console.log()`. You should display the result on the page itself.

**Suggested improvement:**

Add a result display element in your HTML:

```html
<div id="result"></div>
```

And update your JavaScript:

```javascript
function multiplyByTwo() {
  const number = document.getElementById("num").value;
  const result = number * 2;
  document.getElementById("result").textContent = `Result: ${result}`;
}
```

**Unused Variable**

You declared `submitBtn` but never used it:

```javascript
const submitBtn = document.getElementById("submitBtn");
```

If you're not using it, remove this line. Alternatively, you could use it to attach an event listener instead of using the `onclick` attribute in HTML (which is the modern best practice).

**Modern JavaScript Practices**

Consider using event listeners in JavaScript instead of inline `onclick`:

```javascript
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", multiplyByTwo);
```

Then remove the `onclick` attribute from your HTML button.

**Type Conversion**

Consider explicitly converting the input value to a number to avoid potential issues:

```javascript
const number = Number(document.getElementById("num").value);
```

**Commented Code**

You have commented code at the top of your JavaScript file. If this is test code or notes, consider removing it to keep your file clean, or add a comment explaining its purpose.

## Summary

Good work on completing the core functionality! The main improvement needed is:

1. Display the result in the HTML instead of the console.
2. Consider using `addEventListener` instead of inline `onclick` for modern best practices.
3. Clean up unused variables and commented code.

Keep up the good work!
