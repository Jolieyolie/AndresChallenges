# Feedback - Condition1 Task

## Positive Points

**Task Completion**

- You successfully implemented the core functionality of checking whether a user is an adult or minor.
- The application works as expected and provides clear feedback to the user.

**Clean HTML Structure**

- Your HTML is well-structured with proper DOCTYPE and meta tags.
- Good use of semantic HTML elements.
- The form implementation is straightforward and user-friendly.
- Nice touch using `type="number"` for the age input, which provides built-in validation on many browsers.

**User Experience**

- The placeholder text is helpful and guides the user on what to input.
- Using `alert()` provides immediate feedback to the user.
- The `onsubmit="return false"` prevents the form from actually submitting and refreshing the page.

**Code Readability**

- Your code is clean and easy to understand.
- Good use of descriptive variable and function names (`checkAge`, `userAge`, `ageInput`).

## Areas for Improvement

**Input Validation**
Your code doesn't validate if the user actually entered a value or if it's a valid number:

- What happens if the input field is empty?
- What happens if someone enters a negative number?

**Suggested validation:**

```javascript
function checkAge() {
  const userAge = document.getElementById("ageInput").value;

  if (userAge === "" || userAge < 0) {
    alert("Please enter a valid age.");
    return;
  }

  // rest of the code...
}
```

**HTML Display Element**
Add an element in your HTML to display the result instead of using alerts:

```html
<div id="result"></div>
```

**Unused Variable**
In your JavaScript, you declared `submitBtn` but never used it:

```javascript
const submitBtn = document.getElementById("checkBtn");
```

If you're not using it, you can remove it. Alternatively, you could use it to attach the event listener in JavaScript instead of using the `onclick` attribute in HTML.

**Modern JavaScript Practices**
Consider using event listeners in JavaScript instead of inline `onclick`:

```javascript
const submitBtn = document.getElementById("checkBtn");
submitBtn.addEventListener("click", checkAge);
```

This separates your JavaScript logic from your HTML structure, which is considered a best practice. I know we used “onclick” during previous classes, but you are already used to using addEventListener.

If you have any questions, we can address them during class. You did a great job. Congratulations.
