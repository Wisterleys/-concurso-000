import { Injectable, Injector } from '@angular/core';
import { BaseService } from './core/base.service';
import { FormContractModel } from '../models/form-contract.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService<any>{


  constructor(
    protected injector: Injector
  ) {
    super(injector);
   }

   getRegistration():any{
    return this.get('/inscricao');
   }
   postRegistration(value:FormContractModel):any{
    return this.post('/inscricao',
    {
      "nome" : value.name,
      "cpf" : value.CPF,
      "endereco" : value.address,
      "cidade_id" : value.cityId,
      "estado_id" : value.stateId,
      "cargo" : value.job,
      "situacao" : "enviado"
  }
    );
   }

   getCities():any{
    return this.get('/cidadeuf');
   }
}
