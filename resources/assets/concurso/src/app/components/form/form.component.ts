import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityContractModel } from 'src/app/models/city-contract.model';
import { FormContractModel } from 'src/app/models/form-contract.model';
import { StateContractModel } from 'src/app/models/state-contract.model';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() title:string='';
  @Input() submitTile:string='';
  @Input() cities:Array<CityContractModel>=[];
  @Input() states:Array<StateContractModel>=[];
  @Input() btnLoading?:EventEmitter<boolean>;
  public isBtnLoading:boolean=false;
  @Output() dataForm: EventEmitter<FormContractModel> = new EventEmitter();
  public selectedState?:number;
  public selectedCities:Array<CityContractModel>=[];
  public formData:FormContractModel={};
  private validadeDefaultMessage ="Ops! Precisa informar"
  
  constructor() { }

  ngOnInit(): void {
    this.btnLoading?.subscribe(
      (value:boolean)=>{
        this.isBtnLoading=value;
      }
    )
  }
  formDataAssignValues(key:string,value:any){
    switch (key) {
      case 'CPF':
        this.formData.CPF= value.replace(/[\ \/\.\-\\]/g,"").trimStart().trimEnd();
        break;
      case 'Nome completo':
      case 'Nome':
      case 'Name':
        this.formData.name = value;
        break;
      case 'Cargo':
        this.formData.job = value;
        break;
      case 'Estado':
        this.formData.stateId = parseInt(value);
        break;
      case 'Cidade':
        this.formData.cityId = parseInt(value);
        break;
      case 'Endereço':
        this.formData.address = value;
        break;
    }
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
  
  maskCpf(value:Event){
    let str = (<HTMLInputElement>value.target).value;
    (<HTMLInputElement>value.target).value = str.replace(/\D/g,'')
    .replace(/([\d]{3})(\d)/,'$1.$2')
    .replace(/([\d]{3})(\d)/,'$1.$2')
    .replace(/([\d]{3})(\d{1,2})/,'$1-$2')
    .replace(/(-[\d]{2})\d+?$/,'$1');
  }
  validateCpf():boolean{
    
    let elCpf = <HTMLInputElement>document.querySelector(".validate-cpf");
    let label = elCpf.parentNode!.querySelector('label')!.innerHTML;
    let isCpf:boolean=cpf.isValid(elCpf.value);
    if(elCpf.value==null||elCpf.value==''){
      elCpf.parentNode!.querySelector('small')!.innerHTML=`${this.validadeDefaultMessage} ${label}!`;
      elCpf.parentNode!.querySelector('small')!.hidden=false;
      
    }else if(!isCpf){
      elCpf.parentNode!.querySelector('small')!.innerHTML=`CPF inválido!`;
      elCpf.parentNode!.querySelector('small')!.hidden=false;
      
      
    }else{
      isCpf=true;
      elCpf.parentNode!.querySelector('small')!.hidden=true;
      this.formDataAssignValues(label,elCpf.value);
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
        this.formDataAssignValues(label,el);
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
  submit(){
    let isCPF:boolean = this.validateCpf();
    if(this.validateForm()&&isCPF){
      this.isBtnLoading=true;
      this.dataForm.emit(this.formData)
    }
    
  }
  

}
