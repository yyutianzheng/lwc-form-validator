import { LightningElement } from 'lwc';
import UserValidator from './userValidator.js';
import LoginValidator from './loginValidator.js';
import AddressValidator from './addressValidator.js';

export default class ValidatorFactory extends LightningElement {
  static getInstance(type, template) {
    switch (type) {
      case 'Login':
        return new LoginValidator(template);
      case 'User':
        return new UserValidator(template);
      case 'Address':
        return new AddressValidator(template);
      default:
        throw new Error('Validator does not exist');
    }
  }
}