const validateEmail = ({ email, setEmailError }) => {
    email =  email ? email.toString().trim() : ""
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email not valid')
      : setEmailError('');
  };
  
  const validatePhone = ({ phone, setPhoneError }) => {
    phone =  phone ? phone.toString().trim() : ""
    var phoneRegular = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phone && !phone.match(phoneRegular)
      ? setPhoneError('Phone Number not valid')
      : setPhoneError('');
  };
  
  const validateFullName = ({ fullName, setFullNameError }) => {
    fullName =  fullName ? fullName.toString().trim() : ""
    return fullName && fullName.length > 50
      ? setFullNameError('Try to make short and meanfull')
      : setFullNameError('');
  };
  
  const validateMessage = ({ message, setMessageError }) => {
    message =  message ? message.toString().trim() : ""
    return message && message.length < 5
    ? setMessageError('Message is too short')
      : message && message.length > 200
      ? setMessageError('Try to make short and meanfull')
      : setMessageError('');
  };
  
  const validateAddress = ({ address, setAddressError }) => {
    address =  address ? address.toString().trim() : ""
    return address && address.length < 5
    ? setAddressError('Address is too short')
      : address && address.length > 100
      ? setAddressError('Try to make short and meanfull')
      : setAddressError('');
  };

  export { validateEmail, validateFullName, validateMessage, validatePhone, validateAddress };