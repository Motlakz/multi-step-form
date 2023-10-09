const forms = document.querySelectorAll('form');
const continueButtons = document.querySelectorAll('.continue');
const dots = document.querySelectorAll('.dots i');
const steps = document.querySelectorAll('.steps .step');

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const nameSummary = document.querySelector('.summary .name p');
const emailSummary = document.querySelector('.summary .email p');

let currentFormIndex = 0;

function showForm(index) {
    forms.forEach((form, i) => {
        if (i === index) {
            form.style.display = 'grid';
            dots[i].classList.add('active');
        } else {
            form.style.display = 'none';
            dots[i].classList.remove('active');
        }
    });
    updateSteps(index);
}

function updateSteps(index) {
    steps.forEach((step, i) => {
        if (i === index) {
            step.textContent = `Step ${i + 1} of ${forms.length}`;
        } else {
            step.textContent = '';
        }
    });
}

showForm(currentFormIndex);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showForm(index);
        currentFormIndex = index;
    });
});

continueButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const formIndex = button.getAttribute('data-index'); // Get the data-index attribute

        if (validateForm(formIndex)) {
            if (currentFormIndex < forms.length - 1) {
                // Check if it's the second form and a radio button is selected
                if (formIndex === "1" && !isRadioButtonSelected()) {
                    alert('Please select a programming topic');
                    return;
                }

                currentFormIndex++;
                showForm(currentFormIndex);
            }
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
        }
    });
});

function isRadioButtonSelected() {
    // Check if any radio button is selected within the second form
    const secondForm = document.querySelector('.second-form');
    const radioButtons = secondForm.querySelectorAll('input[name="programming"]');
    let isRadioButtonSelected = false;

    radioButtons.forEach((radio) => {
        if (radio.checked) {
            isRadioButtonSelected = true;
        }
    });

    return isRadioButtonSelected;
}

function validateForm(formIndex) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" && email === "") {
        alert('Cannot submit blank form');
        return false;
    }

    if (name === "") {
        alert('Name cannot be blank');
        nameInput.classList.add('error-border');
        return false;
    }

    if (email === "") {
        alert('Email cannot be blank');
        emailInput.classList.add('error-border');
        return false;
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        emailInput.classList.add('error-border');
        return false;
    }

    if (formIndex === "1") {
        const secondForm = document.querySelector('.second-form');
        const radioButtons = secondForm.querySelectorAll('input[name="programming"]');
        
        if (![...radioButtons].some((radio) => radio.checked)) {
            alert('Please select a programming topic');
            return false;
        }
    }

    return true;
}
// removes red border on focus
nameInput.addEventListener('focus', () => {
    nameInput.classList.remove('error-border');
});

emailInput.addEventListener('focus', () => {
    emailInput.classList.remove('error-border');
});
