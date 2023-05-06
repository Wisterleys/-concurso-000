import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { CityContractModel } from 'src/app/models/city-contract.model';
import { FormContractModel } from 'src/app/models/form-contract.model';
import { StateContractModel } from 'src/app/models/state-contract.model';
import { cpf } from 'cpf-cnpj-validator';

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
  public selectedState?:number;
  public selectedCities:Array<CityContractModel>=[];
  public formData:FormContractModel={};
  private validadeDefaultMessage ="Ops! Precisa informar"
  
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    this.cities;
    this.states;
  }
  realTimeValidateNameInput(event: Event) {
    let value = (<HTMLSelectElement>event.target).value;
    value = value.replace(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/, function (match) {
      return match.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    });
    (<HTMLSelectElement>event.target).value = value;
  }
  
  
  validateCpf():boolean{
    console.log("caiu no chamou")
    let elCpf = <HTMLInputElement>document.querySelector(".validate-cpf");
    let label = elCpf.parentNode!.querySelector('label')!.innerHTML;
    let isCpf:boolean=cpf.isValid(elCpf.value);
    if(elCpf.value==null||elCpf.value==''){
      elCpf.parentNode!.querySelector('small')!.innerHTML=`${this.validadeDefaultMessage} ${label}!`;
      elCpf.parentNode!.querySelector('small')!.hidden=false;
      console.log("caiu no válido")
    }else if(!isCpf){
      elCpf.parentNode!.querySelector('small')!.innerHTML=`CPF inválido!`;
      elCpf.parentNode!.querySelector('small')!.hidden=false;
      console.log("caiu no invalido")
      
    }else{
      isCpf=true;
      elCpf.parentNode!.querySelector('small')!.hidden=true;
    }
    return isCpf;
  }
  validateForm():boolean{
    let isOk=true;
    
    document.querySelectorAll('.validate').forEach((e)=>{
      let el=(<HTMLInputElement>e).value;
      let label = e.parentNode!.querySelector('label')!.innerHTML;
      if(el==null||el==''){
        isOk=false
        e.parentNode!.querySelector('small')!.innerHTML=`${this.validadeDefaultMessage} ${label}!`;
        e.parentNode!.querySelector('small')!.hidden=false;
      }else{
        e.parentNode!.querySelector('small')!.hidden=true;
      }
    });

    
    return isOk;
  }
  onSelectedState(event:Event){
    let value =(<HTMLSelectElement>event.target).value;
    if(value!=null){
      this.selectedState = parseInt(value);
      this.selectedCities = this.cities.filter(c=>c.estado_id==this.selectedState);
    }

  }
  submit(event:Event){
    let v = this.validateCpf();
    if(this.validateForm()&&v){
      this.emit(true);
      this.dataForm.emit(this.formData)
      setTimeout(() => {
        this.emit(false);
      }, 2000);
    }
    
  }
  emit(value:boolean){
    this.isBtnLoading=value;
    this.isLoading.emit(value);
  }

}
