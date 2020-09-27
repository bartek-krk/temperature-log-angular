import { Component } from '@angular/core';
import { DeleteService } from '../shared/delete.service';

@Component({
  selector: 'tl-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private deleteService:DeleteService) {}

  message:string;

  onSubmit(formData) {
    console.log(formData.stationId.length);
    if(formData.stationId.length > 0 && formData.apiKey.length > 0) {
      this.message = this.deleteService.delete(formData.stationId,formData.apiKey);
    }
    else {this.message = "Fill in required fields!";}
  }
}
