import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { CityContractModel } from 'src/app/models/city-contract.model';
import { FormContractModel } from 'src/app/models/form-contract.model';
import { StateContractModel } from 'src/app/models/state-contract.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit,OnChanges {
  @Input() title:string='';
  @Input() submitTile:string='';
  @Input() cities:Array<CityContractModel>=[];
  @Input() states:Array<StateContractModel>=[];
  @Output() dataForm: EventEmitter<FormContractModel> = new EventEmitter();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();
  public isBtnLoading:boolean=false;
  public formData:FormContractModel={};
  
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    this.cities;
    this.states;
  }
  submit(){
    this.emit(true);
    this.dataForm.emit(this.formData)
    setTimeout(() => {
      this.emit(false);
    }, 2000);
    
  }
  emit(value:boolean){
    this.isBtnLoading=value;
    this.isLoading.emit(value);
  }

}
