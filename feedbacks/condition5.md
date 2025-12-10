# Feedback - Condition5 Task

## Positive Points

**Task Completion**

- You successfully implemented the function to calculate the difference between a number and 27.
- The conditional logic correctly checks if the difference is greater than 27 and multiplies by 2.
- The application works as expected.

**Code Quality**

- Excellent use of `const` for variable declarations.
- Clean, readable code structure.
- Good use of `type="number"` for the input field.
- Creative and fun heading with "Mysterious Edition"!

**HTML Structure**

- Well-structured HTML with proper DOCTYPE and meta tags.
- Good use of form with `onsubmit="return false"` to prevent page refresh.

## Areas for Improvement

**Critical Bug: Wrong Function Name in addEventListener**

There's a critical bug on line 10 of your JavaScript:

```javascript
submitBtn.addEventListener("click", weather);
```

But I understand that you are using the “calculateDifference” function and not the “weather” function (which has not been declared).

**Event Listener Duplication**

Similar to previous tasks, you have both an `addEventListener` in your JavaScript AND an `onclick` attribute in your HTML. Remove the `onclick` attribute from the HTML button.

**Logic Error in Else Block**

Your else block has incorrect logic:

```javascript
} else {
  alert(27 - yourNumber);
}
```

According to the task, you should always calculate `yourNumber - 27`, not `27 - yourNumber`. The task says: "calculate the difference between a given number and 27" and "If the difference is greater than 27, multiply by 2."

This means:

- Always calculate: `yourNumber - 27`
- If that result is > 27, multiply it by 2
- Otherwise, just display the difference

**Corrected logic:**

```javascript
function calculateDifference() {
  const yourNumber = Number(document.getElementById("numberInput").value);
  const difference = yourNumber - 27;

  if (difference > 27) {
    console.log(difference * 2);
  } else {
    console.log(difference);
  }
}
```

**Missing Test Cases**

The task asks you to test with specific numbers (35, 74, 123). You should add these test cases in your code or comments to show you've tested them:

```javascript
// Test cases:
// calculateDifference() with 35: difference = 8 (not > 27, so output: 8)
// calculateDifference() with 74: difference = 47 (> 27, so output: 94)
// calculateDifference() with 123: difference = 96 (> 27, so output: 192)
```

**Type Conversion**

Consider converting the input value to a number explicitly:

```javascript
const yourNumber = Number(document.getElementById("numberInput").value);
```

**HTML Formatting Issue**

Your placeholder text has a line break in the middle:

```html
placeholder="Please enter your number"
```

This should be on one line:

```html
placeholder="Please enter your number"
```

## Summary

Good effort on this task! However, there are some issues to fix:

1. **Fix the addEventListener** - change `weather` to `calculateDifference`.
2. Remove the `onclick` attribute from the HTML button (It is best practice to use addEventListener.).
3. **Fix the logic** - always calculate `yourNumber - 27`, not `27 - yourNumber`.
4. Test with the provided numbers (35, 74, 123).
