import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { DeclaareHolidayService} from '../../services/declaare-holiday.service';
@Component({
  selector: 'app-declareholiday',
  templateUrl: './declareholiday.component.html',
  styleUrls: ['./declareholiday.component.css']
})
export class DeclareholidayComponent implements OnInit {

  date: String;
  reason: String;

  constructor(private validateService: ValidateService,
    private messages: FlashMessagesService,
   private holiday: DeclaareHolidayService ) { }

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
    console.log('validated');

    // register user
    this.holiday.submit(msg).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
        this.messages.show( 'Successfully Declared', {
          cssClass: 'alert-success',
          timeOut: 5000 });
        // this.router.navigate(['teachers']);
      } else {
        console.log(data);
        console.log('Something went wrong');
      }
    });
  }

}
