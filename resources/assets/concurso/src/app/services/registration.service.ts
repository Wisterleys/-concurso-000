import { Injectable, Injector } from '@angular/core';
import { BaseService } from './core/base.service';
import { FormContractModel } from '../models/form-contract.model';
import { Observable } from 'rxjs';
import { GenericResult } from '../models/core/generic-result.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService<any>{


  constructor(
    protected injector: Injector
  ) {
    super(injector);
   }

   getRegistrationByCPF(cpf:string):Observable<GenericResult>{
    return this.get(`/inscricao/${cpf}`);
   }
   postRegistration(value:FormContractModel):Observable<GenericResult>{
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
   putRegistration(value:FormContractModel):Observable<GenericResult>{
    return this.patch('/inscricao',
        {
          "nome" : value.name,
          "id":value.id,
          "pessoa_fisica_id":value.personId,
          "cpf" : value.CPF,
          "endereco" : value.address,
          "cidade_id" : value.cityId,
          "estado_id" : value.stateId,
          "cargo" : value.job,
          "situacao" : "enviado"
      }
    );
   }

   getCities():Observable<GenericResult>{
    return this.get('/cidadeuf');
   }
}
