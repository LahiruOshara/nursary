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

  // validate leave form
  validateLeaveForm(form) {
    if (form.username === undefined || form.edate === undefined || form.sdate === undefined || form.reason === undefined ) {
      return false;
    }return true;
  }
  // validate advanced payment form
  validateAdvForm(form) {
    if ( form.username === undefined || form.amount === undefined || form.reason === undefined) {
      return false;
    }return true;
  }

  validateAmount(amount) {
    const am = /^\d+(?:\.\d{0,2})$/;
    return am.test(String(amount));
  }

  validateDates(date1, date2) {
    const temp1 = new Date(date1);
    const temp2 = new Date(date2);
    const today = new Date(); // today date

    if (today < temp1 && today < temp2) {

      if (temp1 <= temp2) {
        return true;
      }return false;
    }return false;
  }

  validateDate(date1) {
    const temp1 = new Date(date1);
    const today = new Date(); // today date
    if (today < temp1) {
      return true;
    }return false;
  }
  validateMaintananceForm(form) {
    if ( form.username === undefined || form.briefDescription === undefined) {
      return false;
    }return true;

  }

  validatePhoneNo(number) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(number));
  }

  validateTrasportRequest(form) {
    if (form.from === undefined ) {
      return false;
    }return true;
  }
  validatehomework(data) {
    if (data.homeWork === undefined || data.dueDate === undefined ) {
      console.log(data.homeWork, data.dueDate);
      return false;
    } else {
      console.log('validated');
      return true;
    }
  }

}

