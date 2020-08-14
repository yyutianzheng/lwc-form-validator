const REGEX = {
  postalCode: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/,
  password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,12}$/g,
  phone: /^[0-9]{10}$/,
};

export default REGEX;