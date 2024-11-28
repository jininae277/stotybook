const validateStringByRegex = (str, regex) => {
  return new RegExp(regex).test(str);
};

export const validPhoneRule = (phone) => {
  phone = phone.replaceAll("-", "");
  return validateStringByRegex(phone, "^[0-9\b]+$");
};
export const validEmailRule = (email) => {
  return validateStringByRegex(email, "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z-.]+$");
};

export const validPasswordRule = (password) => {
  return validateStringByRegex(password, "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$");
};

export const validLicenseRule = (license) => {
  return validateStringByRegex(license, "^[0-9]{3}-[0-9]{2}-[0-9]{5}$");
};

export const validProcessRateRule = (processRate) => {
  if (processRate === "100%") return true;
  return validateStringByRegex(processRate, "^[0-9]{1,2}.[0-9]{1}$");
};

export const validMobilePhoneRule = (phone) => {
  const result = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  return result.test(phone);
};
