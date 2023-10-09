# Dev Challenges Multi-step registration form

This is a solution to the [Dev Challenges Multi-step registration form](https://devchallenges.io/challenge/35). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should:

- Interact with the basic structure.

- See a form with inputs, buttons, steps, and toggle dots.

- See errors if there is no name, the form is blank, there is no email, and/or email format is incorrect.

- Not be able to continue to the next step if inputs are empty or the topic is not selected.

- Be able to continue to the next step if inputs are filled or topic is selected.

- Be able to know which step they are at.

- See an alert with '✅ Success' message, when they click 'confirm'.

- Be able to see the form on mobile, tablet, and desktop.

### Screenshot

![Screenshot of form]("C:\Users\User\Downloads\multi-step-form\images\2023-10-09 21_30_03-Multi Step Form.png")

### Links

- Live Site URL: [https://motlakz.github.io/responsive-web-starter](https://motlakz.github.io/responsive-web-starter)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript(DOM Manipulation, Data Structures and Algorithms, Event Listeners)

### What I learned

- how to manipulate form validation features;
- target elements according to their data-index attribute, associate dot toggles with the different parts of the form and linking steps to each one;
- using length to determine the position of the current form/instance of form;
- creating a regEx error message;
- full-fledged form validation;
- using boolean functions to check if the radio buttons are toggled and display an error if not;
- keep a form from moving forward if there are no inputs or selections;
- populating form data using JavaScript when a user has submitted their details to determine their info is correct;
- using a focus event listener for the first time to revert the border color to normal once an error has been addressed by the user.

```js
// Check if it's the final form and update the summary
if (currentFormIndex === forms.length - 1) {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const confirm = document.getElementById('confirmButton');

    nameSummary.textContent = `Full Names: ${nameValue}`;
    emailSummary.textContent = `Email: ${emailValue}`;

    confirm.addEventListener('click', () => {
        alert("✅ Success!");
    })
}
```

### Continued development

I intend to toy around with interactive states, components, and frameworks and apply them in future JavaScript related projects.

## Author

- Twitter - [@MotlalepulaSel6](https://www.twitter.com/MotlalepulaSel6)
