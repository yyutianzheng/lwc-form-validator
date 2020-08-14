import BaseValidator from './baseValidator.js';
import ERROR_LABELS from './errorLabels.js';

export default class LoginValidator extends BaseValidator {
  checkValidity(field) {
    const fieldName = field.name;
    switch (fieldName) {
      case 'username':
        this.validateUsername(field);
        break;
      case 'password':
        this.validatePassword(field);
        break;
      default:
    }
  }

  validateUsername(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isUsername = this.isMatchingPattern('username', field.value);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.FIELD_IS_REQUIRED);
    } else if (!isEmail) {
      this.generateErrorMessage(field.name, ERROR_LABELS.INVALID_USERNAME);
    }
  }

  validatePassword(field) {
    const isInputMissing = this.validateRequired(field.value);
    if (isInputMissing) {
      this.generateErrorMessage(field.name, ERROR_LABELS.PASSWORD_IS_MISSING);
    }
  }
}
