import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'tl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private registerService:RegisterService) {}

  message:string;
  isWarning:boolean;

  onSubmit(formData) {
    if(formData.eMail.length > 0 && formData.location.length > 0) {
      this.isWarning = false;
      this.message = this.registerService.register(formData.eMail,formData.location);
    }
    else {
      this.isWarning = true;
      this.message = "Fill in required fields!";
    }
  }

}
