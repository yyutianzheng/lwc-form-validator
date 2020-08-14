import REQUIRED_USERNAME_FIELD_LABEL from '@salesforce/label/c.RequiredEmailFieldError';
import REQUIRED_PASSWORD_FIELD_LABEL from '@salesforce/label/c.RequiredPasswordFieldError';
import INVALID_USERNAME_LABEL from '@salesforce/label/c.UsernameFormatError';

import REQUIRED_FIELD_LABEL from '@salesforce/label/c.RequiredFieldError';
import CHARACTER_LIMIT_LABEL from '@salesforce/label/c.CharacterLimitError';
import PASSWORD_FORMAT_LABEL from '@salesforce/label/c.PasswordFormatError';
import PASSWORD_MISMATCH_LABEL from '@salesforce/label/c.PasswordMismatchError';
import EMAIL_FORMAT_LABEL from '@salesforce/label/c.EmailFormatError';
import EMAIL_MISMATCH_LABEL from '@salesforce/label/c.EmailMismatchError';

import STREET_MISSING_LABEL from '@salesforce/label/c.StreetMissingError';
import CITY_MISSING_LABEL from '@salesforce/label/c.CityMissingError';
import PROVINCE_MISSING_LABEL from '@salesforce/label/c.ProvinceMissingError';
import INVALID_POSTALCODE_LABEL from '@salesforce/label/c.InvalidPostalCodeError';


const ERROR_LABELS = {
  // Login
  USERNAME_IS_MISSING: REQUIRED_USERNAME_FIELD_LABEL,
  PASSWORD_IS_MISSING: REQUIRED_PASSWORD_FIELD_LABEL,
  INVALID_USERNAME: INVALID_USERNAME_LABEL,

  // Registration
  FIELD_IS_REQUIRED: REQUIRED_FIELD_LABEL,
  CHATACTER_OVER_LIMIT: CHARACTER_LIMIT_LABEL,
  INVALID_PASSWORD: PASSWORD_FORMAT_LABEL,
  INVALID_EMAIL: EMAIL_FORMAT_LABEL,
  CONFIRMED_PASSWORD_NOT_MATCHING: PASSWORD_MISMATCH_LABEL,
  CONFIRMED_EMAIL_NOT_MATCHING: EMAIL_MISMATCH_LABEL,

  // Address
  STREET_IS_MISSING: STREET_MISSING_LABEL,
  CITY_IS_MISSING: CITY_MISSING_LABEL,
  PROVINCE_IS_MISSING: PROVINCE_MISSING_LABEL,
  INVALID_POSTAL_CODE: INVALID_POSTALCODE_LABEL,

};

export default ERROR_LABELS;