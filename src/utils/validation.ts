  // utils/validation.ts
  export const nameMinEmailLength = 0;
  export const nameMaxLength = 255;

  export function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  export function validateEmailLength(email: string) {
    return email.length > nameMinEmailLength && email.length < nameMaxLength;
  }

  // func to run all checks
  export const validateContactForm = (name: string, email: string, queryType: string, message: string) => {
    if (!name) {
      return 'Name is required.';
    }
    if (!email) {
      return 'Email is required.';
    }
    if (!validateEmail(email)) {
      return 'Please enter a valid email address.';
    }
    if (!queryType) {
      return 'Query type is required.';
    }
    if (!message) {
      return 'Message is required.';
    }
    if (!validateEmailLength(email)) {
      return 'Email length is invalid.';
    }
    return '';
  };
