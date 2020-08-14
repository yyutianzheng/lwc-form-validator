import BaseValidator from './baseValidator.js';
import ERROR_LABELS from './errorLabels.js';

export default class UserValidator extends BaseValidator {
  checkValidity(field) {
    const fieldName = field.name;
    switch (fieldName) {
      case 'firstName':
        this.validateFirstName(field);
        break;
      case 'lastName':
        this.validateLastName(field);
        break;
      case 'birthDate':
        this.validateBirthDate(field);
        break;
      case 'email':
        this.validateEmail(field);
        break;
      case 'password':
        this.validatePassword(field);
        break;
      case 'confirmedPassword':
        this.validateConfirmedPassword(field);
        break;
      case 'confirmedEmail':
        this.validateConfirmedEmail(field);
        break;
      default:
    }
  }

  validateFirstName(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isOverLimit = !this.checkLengthMax(field.value, 50);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.FIELD_IS_REQUIRED);
    } else if (isOverLimit) {
      this.generateErrorMessage(field.name, ERROR_LABELS.CHATACTER_OVER_LIMIT);
    }
  }

  validateLastName(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isOverLimit = !this.checkLengthMax(field.value, 50);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.FIELD_IS_REQUIRED);
    } else if (isOverLimit) {
      this.generateErrorMessage(field.name, ERROR_LABELS.CHATACTER_OVER_LIMIT);
    }
  }

  validateBirthDate(field) {
    const isInputMissing = this.validateRequired(field.value);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.FIELD_IS_REQUIRED);
    }
  }

  validateEmail(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isValidEmail = this.isMatchingPattern('email', field.value);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.FIELD_IS_REQUIRED);
    } else if (!isValidEmail) {
      this.generateErrorMessage(field.name, ERROR_LABELS.INVALID_EMAIL);
    }
  }

  validatePassword(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isValidPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,12}$/g.test(field.value);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.PASSWORD_IS_MISSING);
    } else if (!isValidPassword) {
      this.generateErrorMessage(field.name, ERROR_LABELS.INVALID_PASSWORD);
    }
  }

  validateConfirmedPassword(field) {
    const passwordValue = this.template.querySelector("input[name='password']").value;
    if (passwordValue !== field.value) {
      this.generateErrorMessage(field.name, ERROR_LABELS.CONFIRMED_PASSWORD_NOT_MATCHING);
    }
  }

  validateConfirmedEmail(field) {
    const emailValue = this.template.querySelector("input[name='email']").value;
    if (emailValue !== field.value) {
      this.generateErrorMessage(field.name, ERROR_LABELS.CONFIRMED_EMAIL_NOT_MATCHING);
    }
  }

}
