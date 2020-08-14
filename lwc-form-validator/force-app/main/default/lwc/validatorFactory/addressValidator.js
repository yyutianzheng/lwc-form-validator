import BaseValidator from './baseValidator.js';
import ERROR_LABELS from './errorLabels.js';

export default class AddressValidator extends BaseValidator {

  checkValidity(field) {
    const fieldName = field.name;
    switch (fieldName) {
      case 'address':
        this.validateAddress(field);
        break;
      case 'city':
        this.validateCity(field);
        break;
      case 'province':
        this.validateProvince(field);
        break;
      case 'postalCode':
        this.validatePostalCode(field);
        break;
      default:
    }
  }

  validateAddress(field) {
    const isInputMissing = this.validateRequired(field.value);
    if (isInputMissing) {
      const errorMessage = ERROR_LABELS.STREET_IS_MISSING;
      this.generateErrorMessage(field.name, errorMessage);
    }
  }

  validateCity(field) {
    const isInputMissing = this.validateRequired(field.value);
    if (isInputMissing) {
      const errorMessage = ERROR_LABELS.CITY_IS_MISSING;
      this.generateErrorMessage(field.name, errorMessage);
    }
  }

  validateProvince(field) {
    const selectedValue = field.options[field.selectedIndex].value;
    const isInputMissing = this.validateRequired(selectedValue);
    if (isInputMissing) {
      const errorMessage = ERROR_LABELS.PROVINCE_IS_MISSING;
      this.generateErrorMessage(field.name, errorMessage);
    }
  }

  validatePostalCode(field) {
    const isInputMissing = this.validateRequired(field.value);
    const isPostalCode = this.isPostalCode(field.value);
    if (isInputMissing || !isPostalCode) {
      const errorMessage = ERROR_LABELS.INVALID_POSTAL_CODE;
      this.generateErrorMessage(field.name, errorMessage);
    }
  }
}
