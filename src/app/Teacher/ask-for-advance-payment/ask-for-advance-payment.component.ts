import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AdvPaymentFormService} from '../../services/adv-payment-form.service';


@Component({
  selector: 'app-ask-for-advance-payment',
  templateUrl: './ask-for-advance-payment.component.html',
  styleUrls: ['./ask-for-advance-payment.component.css']
})
export class AskForAdvancePaymentComponent implements OnInit {
  username: string;
  amount: string;
  reason: string;
  constructor(private messages: FlashMessagesService,
  private validateService: ValidateService,
  private advPaymentService: AdvPaymentFormService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  onFormSubmit() {
    const advPaymentForm = {//json object
      username: this.username,
      amount: this.amount,
      reason: this.reason
    };

    //validating rupees
    if (!this.validateService.validateAmount(this.amount)) {
      this.messages.show( 'Enter valid amount', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }

    // validating
    if (!this.validateService.validateAdvForm(advPaymentForm)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }

    // submitting
    this.advPaymentService.submitAdvPaymentForm(advPaymentForm).subscribe(data => {
      if (data.success) {
        this.messages.show( 'Submited', {
          cssClass: 'alert-success',
          timeOut: 300 });
          return true;

      } else {
        this.messages.show( data.msg, {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        return false;
      }
    });

   }

}

