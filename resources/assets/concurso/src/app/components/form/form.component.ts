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
  @Input() isPrintChild?: EventEmitter<boolean>;
  public isPrint:boolean=false;
  public isBtnLoading:boolean=false;
  public isBtnLoadingData:boolean=false;
  public isFielddisabled=false;
  @Output() dataForm: EventEmitter<FormContractModel> = new EventEmitter();
  @Input() showDataForm?: EventEmitter<FormContractModel>;
  @Output() showData: EventEmitter<string> = new EventEmitter();
  public selectedState?:number;
  public selectedCity?:number;
  public selectedCities:Array<CityContractModel>=[];
  public formData:FormContractModel={};
  private validadeDefaultMessage ="Ops! Precisa informar"
  
  constructor() { }

  ngOnInit(): void {
    this.isPrintChild?.subscribe(
      (value:boolean)=>{
        this.isPrint=value;
      }
    );
    this.btnLoading?.subscribe(
      (value:boolean)=>{
        this.isBtnLoading=value;
      }
    )
    this.showDataForm?.subscribe(
      (value:FormContractModel)=>{
        let s = <HTMLInputElement>document.querySelector("#state");
        this.formData=value;
        if(value.stateId&&value.cityId){
          this.submitTile = "Atualizar dados";
          this.title='Comprovante de Inscrição';
          this.isFielddisabled=true;
          s.value = value.stateId.toString();
          let ciity=value.cityId.toString();
          this.selectedState = value.stateId;
          this.selectedCities = this.cities.filter(c=>c.estado_id==this.selectedState);
          setTimeout(() => {
            let c = <HTMLInputElement>document.querySelector("#city");
            c.value = ciity;
          }, 100);
        }
        this.isBtnLoadingData=false;
      }
    )
  }

  formatDate(date:Date):string{
    const dataFormatada = date.toLocaleString('pt-BR', {
      timeZone: 'America/Araguaina',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second:'2-digit',
      hour12: false,
    });
    return dataFormatada; // Saída: "08/05/2023, 10:30:05"

  }

  cpfFormatClean(cpf:string):string{
    return cpf.replace(/^[\s\uFEFF\xA0]+/g, '').replace(/[\ \/\.\-\\]/g,"").trim();
  }

  formDataAssignValues(key:string,value:any){
    switch (key) {
      case 'CPF':
        this.formData.CPF= this.cpfFormatClean(value);
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
  
  formatCpf(value:Event){
    let str = (<HTMLInputElement>value.target).value;
    (<HTMLInputElement>value.target).value = this.maskCpf(str)
  }

  maskCpf(value:string):string{
   
    return value.replace(/\D/g,'')
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
      this.isFielddisabled=true;
      this.dataForm.emit(this.formData)
    }
    
  }

  loadData(){
    let elCpf = <HTMLInputElement>document.querySelector(".validate-cpf");
    let isCPF:boolean = this.validateCpf();
    if(isCPF){
      this.isBtnLoadingData=true;
      console.log(this.cpfFormatClean(elCpf.value));
      this.showData.emit(this.cpfFormatClean(elCpf.value));
    }
  }
  

}
