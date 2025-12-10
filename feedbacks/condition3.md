# Feedback - Condition3 Task

## Positive Points

**Task Completion**

- You successfully implemented the hookah age verification with the required conditional logic.
- Both messages ("Yes, you can smoke hookah" and "You are not allowed to smoke hookah yet") are correctly displayed.
- The application works as expected.

**Code Quality**

- Excellent use of `const` for variable declarations.
- Clean, readable code structure.
- Good use of `type="number"` for the input field.

**Modern JavaScript Practices**

- Great job using `addEventListener` with an inline function! This is a modern approach.

## Areas for Improvement

**Event Listener Duplication**
Similar to the previous task, you have both an `addEventListener` in your JavaScript AND an `onclick` attribute in your HTML:

```javascript
// In script.js
submitBtn.addEventListener("click", function checkAge(event) { ... });
```

```html
<!-- In index.html -->
<button type="submit" id="checkBtn" onclick="checkAge()"></button>
```

The `onclick="checkAge()"` in the HTML won't work because `checkAge` is not a global function - it's defined inside the `addEventListener` callback. You should remove the `onclick` attribute from the HTML button.

**Display Results in HTML**
The task asks to "output in the HTML," but you're using `alert()` instead. Consider displaying the result directly on the page.

**Suggested improvement:**

Add a result display element in your HTML:

```html
<div id="result"></div>
```

And update your JavaScript:

```javascript
const submitBtn = document.getElementById("checkBtn");
submitBtn.addEventListener("click", function checkAge(event) {
  event.preventDefault();
  const userAge = document.getElementById("ageInput").value;
  const resultDisplay = document.getElementById("result");

  if (userAge >= 18) {
    resultDisplay.textContent = "Yes, you can smoke hookah";
  } else {
    resultDisplay.textContent = "You are not allowed to smoke hookah yet.";
  }
});
```

**Input Validation**
Consider adding validation to check if the user entered a valid age (not empty, not negative).

## Summary

Great work! You correctly implemented `event.preventDefault()` and used modern JavaScript practices with `addEventListener`. The main points to address are:

1. Remove the `onclick` attribute from the HTML button.
2. Display results in the HTML instead of using alerts.
3. Add input validation for better user experience.

You're making excellent progress - keep it up!
