import { Component, OnInit } from '@angular/core';
import {TransferSalaryDetailsService } from '../../services/transfer-salary-details.service';
@Component({
  selector: 'app-salary-sheet',
  templateUrl: './salary-sheet.component.html',
  styleUrls: ['./salary-sheet.component.css']
})

export class SalarySheetComponent implements OnInit {

  constructor(private salaryDetail:TransferSalaryDetailsService) { }
  details:any;
  username:any
  ngOnInit() {
    this.getDetails();
  }
  getDetails(){
    this.username=localStorage.getItem('username');
    console.log(this.username)
    this.salaryDetail.getInfo(this.username).subscribe(data=>{this.details=data
      console.log(data);
    },
     
      error=>{console.log(error);return false}
    )
  }

}
