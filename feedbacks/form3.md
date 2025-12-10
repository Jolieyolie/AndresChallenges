# Feedback - Form3 Task

## Positive Points

**Task Completion**

- You successfully implemented the function to compare ages of two people.
- The application works correctly and provides clear feedback.

**Code Quality**

- Good conditional logic with if/else if/else structure.
- Clean, readable code.
- Creative approach comparing who is older rather than just showing the difference.

**User Experience**

- Excellent user-friendly approach! You added name inputs to make the comparison more personal and meaningful.
- The task mentions "Try to think in a user-friendly way" - you did exactly that by including names!
- Creative title: "Let's play the 'Who's older' game" makes it fun and engaging.

**HTML & CSS**

- Well-structured HTML with proper semantic elements.
- Good CSS styling with flexbox for layout.
- Nice visual design with proper spacing and styling.
- Professional-looking form with good input styling.

## Areas for Improvement

**Task Requirement: Display Age Difference**

The task specifically asks to "write the difference in years to your HTML," but you're only showing who is older, not the actual difference. Consider adding the numeric difference:

```javascript
function compareAge() {
  const ageInput1 = Number(document.getElementById("age1").value);
  const ageInput2 = Number(document.getElementById("age2").value);
  const nameInput1 = document.getElementById("name1").value;
  const nameInput2 = document.getElementById("name2").value;

  const difference = Math.abs(ageInput1 - ageInput2);

  if (ageInput1 > ageInput2) {
    alert(`${nameInput1} is older than ${nameInput2} by ${difference} year(s)`);
  } else if (ageInput1 < ageInput2) {
    alert(`${nameInput2} is older than ${nameInput1} by ${difference} year(s)`);
  } else {
    alert(`${nameInput1} and ${nameInput2} are of the same age.`);
  }
}
```

**Display Result in HTML, Not Alert**

The task asks to write the result "to your HTML," but you're using `alert()`. Consider displaying the result on the page:

```html
<div id="result"></div>
```

```javascript
document.getElementById(
  "result"
).textContent = `${nameInput1} is older than ${nameInput2} by ${difference} year(s)`;
```

**Modern JavaScript Practices**

You declared `submitBtn` but didn't use it. Consider using it with `addEventListener` instead of inline `onclick`.

**Input Validation**

Consider adding validation to ensure both names and ages are entered:

```javascript
if (!nameInput1 || !nameInput2 || !ageInput1 || !ageInput2) {
  alert("Please fill in all fields");
  return;
}
```

**Type Conversion**

Convert age inputs to numbers explicitly:

```javascript
const ageInput1 = Number(document.getElementById("age1").value);
const ageInput2 = Number(document.getElementById("age2").value);
```

## Summary

Excellent work! You went above and beyond by making the application user-friendly with names and a game-like interface. The styling is professional and the logic is solid. The main improvements needed are:

1. Add the numeric age difference as requested in the task.
2. Display results in HTML instead of using alerts.
3. Add input validation for better user experience.
4. Fix the small typo in the placeholder text.

Great job thinking creatively about user experience - keep it up!
