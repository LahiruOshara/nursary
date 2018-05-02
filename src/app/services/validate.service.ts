import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // validate form fields
  validateRegister(user) {
    // tslint:disable-next-line:max-line-length
    if (user.firstName === undefined || user.middleName === undefined || user.lastName === undefined
      || user.email === undefined || user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  // validate email
  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // validate signin
  validateSignIn(user) {
    if (user.username === undefined || user.password === undefined ) {
      return true;
    }return false;
  }

  validateLeaveForm(form) {
    if (form.username === undefined || form.edate === undefined || form.sdate === undefined || form.reason === undefined ) {
      return false;
    }return true;
  }

  validateDates(date1, date2) {
    const temp1 = new Date(date1);
    const temp2 = new Date(date2);
    if (temp1 <= temp2) {
      return true;
    }return false;

  }

  validatePhoneNo(number) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(number));
  }



}

