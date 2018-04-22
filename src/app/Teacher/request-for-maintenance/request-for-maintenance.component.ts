import { Component, OnInit } from '@angular/core';
import { MaintenanceRequestForm} from './maintenance-request-form';

@Component({
  selector: 'app-request-for-maintenance',
  templateUrl: './request-for-maintenance.component.html',
  styleUrls: ['./request-for-maintenance.component.css']
})
export class RequestForMaintenanceComponent implements OnInit {

  constructor() { }
  newForm = new MaintenanceRequestForm();

  ngOnInit() {
  }

}
