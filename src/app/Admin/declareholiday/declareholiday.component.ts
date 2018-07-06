import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-declareholiday',
  templateUrl: './declareholiday.component.html',
  styleUrls: ['./declareholiday.component.css']
})
export class DeclareholidayComponent implements OnInit {

  date: String;
  reason: String;

  constructor(private validateService: ValidateService,
    private messages: FlashMessagesService ) { }

  ngOnInit() {
  }

  onSubmit() {
    const msg = {
      date: this.date,
      reason: this.reason
    };

    // validate date
    if (!this.validateService.validateDate(msg.date)) {
      this.messages.show( 'Date is not valid', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        return false;
    }
  }

}
