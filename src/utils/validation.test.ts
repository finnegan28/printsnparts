import {
  emailChecks,
  validateContactForm,
  emailMinLengthCheck,
  emailMaxLengthCheck,
  validateEmail,
} from './validation';

describe('emailChecks', () => {
  it('should return true if all email checks pass', () => {
    expect(emailChecks('test@example.com')).toBe(true);
  });

  it('should return false if emailMinLengthCheck fails', () => {
    expect(emailChecks('a@example.com')).toBe(false);
  });

  it('should return false if emailMaxLengthCheck fails', () => {
    expect(emailChecks('test@example.com'.repeat(100))).toBe(false);
  });

  it('should return false if validateEmail fails', () => {
    expect(emailChecks('test@example')).toBe(false);
  });
});

describe('validateContactForm', () => {
  it('should return "Name is required." if name is empty', () => {
    expect(validateContactForm('', 'test@example.com', 'query', 'message')).toBe('Name is required.');
  });

  it('should return "Email is required." if email is empty', () => {
    expect(validateContactForm('John Doe', '', 'query', 'message')).toBe('Email is required.');
  });

  it('should return "Please enter a valid email address." if email is invalid', () => {
    expect(validateContactForm('John Doe', 'invalidemail', 'query', 'message')).toBe('Please enter a valid email address.');
  });

  it('should return "Query type is required." if queryType is empty', () => {
    expect(validateContactForm('John Doe', 'test@example.com', '', 'message')).toBe('Query type is required.');
  });

  it('should return "Message is required." if message is empty', () => {
    expect(validateContactForm('John Doe', 'test@example.com', 'query', '')).toBe('Message is required.');
  });

  it('should return an empty string if all fields are valid', () => {
    expect(validateContactForm('John Doe', 'test@example.com', 'query', 'message')).toBe('');
  });
});

describe('emailMinLengthCheck', () => {
  it('should return true if email length is greater than nameMinEmailLength', () => {
    expect(emailMinLengthCheck('test@example.com')).toBe(true);
  });

  it('should return false if email length is equal to nameMinEmailLength', () => {
    expect(emailMinLengthCheck('a@example.com')).toBe(false);
  });
});

describe('emailMaxLengthCheck', () => {
  it('should return true if email length is less than nameMaxLength', () => {
    expect(emailMaxLengthCheck('test@example.com')).toBe(true);
  });

  it('should return false if email length is equal to nameMaxLength', () => {
    expect(emailMaxLengthCheck('test@example.com'.repeat(100))).toBe(false);
  });
});

describe('validateEmail', () => {
  it('should return true if email is valid', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('should return false if email is invalid', () => {
    expect(validateEmail('test@example')).toBe(false);
  });
});