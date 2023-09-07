import { Keyboard, Platform } from 'react-native';

export const hideSoftKeyboard = () => {
  Keyboard.dismiss();
};

export const isValidEmail = (target: string): boolean => {
    const EMAIL_REGEX = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    return EMAIL_REGEX.test(target);
};

export const isValidPhoneNumber = (target: string): boolean => {
  if (!/[a-zA-Z]+/.test(target) && target.replace(/\D/g, '').length === 10) {
    return target.length === 14;
  }
  return false;
};