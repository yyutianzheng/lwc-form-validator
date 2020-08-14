import REGEX from './regEx.js';

export default class BaseValidator {
  constructor(tmpl) {
    this.template = tmpl;
    this.validationFields = tmpl.querySelectorAll('.validation-field');
    this.invalidInputs = [];
  }

  validateAll() {
    this.validationFields.forEach((field) => {
      this.checkValidity(field);
    });
  }

  validateRequired(value) {
    let newVal = value;
    if (value.trim) {
      newVal = value.trim();
    }
    return !newVal;
  }

  isPostalCode(postalCode) {
    return REGEX.postalCode.test(postalCode);
  }

  isMatchingPattern(type, value) {
    return REGEX[type].test(value);
  }

  checkLengthMax(value, max) {
    return value.length <= max;
  }

  isDateInTheFuture(dt2) {
    const dt1 = new Date();
    const dateDifference = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth() + 1, dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth() + 1, dt1.getDate())) / (1000 * 60 * 60 * 24));
    if (dateDifference > 0) {
      return true;
    }
    return false;
  }

  generateErrorMessage(name, errorMessage) {
    const error = {
      fieldName: name,
      errorMessage: errorMessage,
    };
    this.invalidInputs.push(error);
  }

  reportErrors() {
    this.invalidInputs.forEach((e) => {
      const containerClassName = `.${e.fieldName}-container`;
      const fieldContainer = this.template.querySelector(containerClassName);
      if (fieldContainer) {
        if (fieldContainer.classList.contains('error')) {
          this.removeErrorMessage(fieldContainer); // clear existing error
        }
        fieldContainer.classList.add('error');
        // create error message
        const spanElement = document.createElement('span');
        spanElement.innerHTML = e.errorMessage;
        spanElement.style.display = 'block';
        fieldContainer.firstChild.appendChild(spanElement);
      }
    });
  }

  removeErrorMessage(fieldContainer) {
    const containerFirstChild = fieldContainer.childNodes[0];
    containerFirstChild.removeChild(containerFirstChild.childNodes[1]);
    fieldContainer.classList.remove('error');
  }

}