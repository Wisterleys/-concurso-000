import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concurso';

  constructor(
    public service: RegistrationService
  ){
    this.service.getRegistration().subscribe(
      (value:any)=>{
        console.log(value);

      }
    );
    this.service.getCities().subscribe(
      (value:any)=>{
        console.log(value);

      }
    );
  }
  
}
