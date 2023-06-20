const nameRegex = /^[a-zA-Z]{2,}$/g;

function setErrorMessage(formControl, errorMessage) {
    formControl.classList.add('error');
    const errorMessageInput = formControl.querySelector('.error-message');
    errorMessageInput.textContent = errorMessage;
}

function clearError(formControl) {
    return function clearErrorDebug() {
        if (formControl.classList.contains('error')) {
            formControl.classList.remove('error');
            const errorMessageInput = formControl.querySelector('.error-message');
            errorMessageInput.textContent = '';
        }
    };
}

function addErrorReset(formControl) {
    const inputs = formControl.querySelectorAll('input');
    Array.from(inputs).forEach((input) => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            formControl.onchange = clearError(formControl);
        } else {
            formControl.onkeyup = clearError(formControl);
        }
    });
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed', event);
    const form = document.getElementById('form');

    const firstNameControl = document.getElementById('firstName');
    addErrorReset(firstNameControl);

    const lastNameControl = document.getElementById('lastName');
    addErrorReset(lastNameControl);


    form.onsubmit = async function onsubmitDebug(e) {
        let isValid = true;
        const inputData = new FormData(e.target);
        const input = Object.fromEntries(inputData);

        if (!input.firstName) {
            setErrorMessage(firstNameControl, 'First name is required');
            isValid = false;
        } else if (!input.firstName.match(nameRegex)) {
            setErrorMessage(firstNameControl, 'First name does not follow the required format, please add minimum of 2 character');
            isValid = false;
        }

        if (!input.lastName) {
            setErrorMessage(lastNameControl, 'Last name is required');
            isValid = false;
        } else if (!input.lastName.match(nameRegex)) {
            setErrorMessage(lastNameControl, 'Last name does not follow the required format, please add minimum of 2 character');
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
            return;
        }
    };
});