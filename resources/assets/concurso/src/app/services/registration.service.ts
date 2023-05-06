import { Injectable, Injector } from '@angular/core';
import { BaseService } from './core/base.service';

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

   getCities():any{
    return this.get('/cidadeuf');
   }
}
