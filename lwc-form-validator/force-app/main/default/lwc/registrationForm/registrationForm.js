import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { getInstance } from 'c/validatorFactory';

export default class RegistrationForm extends LightningElement {
  @track
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.errorAlert = false;
    const tmpl = this.template;
    const validator = getInstance('User', tmpl);
    validator.validateAll();
    this.invalidInputs = validator.invalidInputs;
    if (this.invalidInputs.length > 0) {
      validator.reportErrors();
    } else {
      this.showToast();
    }
  }

  handleOnKeyUp(evt) {
    this.removeErrorMessage(evt.target.name);
  }

  showToast() {
    const event = new ShowToastEvent({
      variant: 'success',
      title: 'Success!',
      message: 'Your registration has been submitted successfully',
    });
    this.dispatchEvent(event);
  }

  removeErrorMessage(fieldName) {
    const containerClassName = `.${fieldName}-container`;
    const fieldContainer = this.template.querySelector(containerClassName);
    if (fieldContainer && fieldContainer.classList.contains('error')) {
      const containerFirstChild = fieldContainer.childNodes[0];
      containerFirstChild.removeChild(containerFirstChild.childNodes[1]);
      fieldContainer.classList.remove('error');
    }
  }

}
