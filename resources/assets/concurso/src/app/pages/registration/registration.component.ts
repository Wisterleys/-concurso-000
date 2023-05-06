import { Component, OnInit } from '@angular/core';
import { CityContractModel } from 'src/app/models/city-contract.model';
import { StateContractModel } from 'src/app/models/state-contract.model';
import { FormContractModel } from 'src/app/models/form-contract.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public formTile:string="Inscrição do canditado";
  public submitTile: string="Salvar inscrição";
  public isLoading:boolean=false;
  public cities:Array<CityContractModel>=[];
  public states:Array<StateContractModel>=[];
  constructor(
    private service:RegistrationService 
  ) { }

  ngOnInit(): void {
   /*  this.service.getRegistration().subscribe(
      (value:any)=>{
        console.log(value);

      }
    ); */
    this.service.getCities().subscribe(
      (value:any)=>{
        this.cities = value.data.cities;
        this.states = value.data.states;
        console.log("kd os dados?",this.states);

      }
    );
  }
  onSubmit(value:FormContractModel){
    console.log(value)
  }
  onIsFormLoading(value:boolean){
    this.isLoading=value;
    console.log(value)
  }

}
