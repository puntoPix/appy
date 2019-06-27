import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor() { }

  // Botón Ingresar
  ingresar() {
    console.log('hice click en ingresar');
    }
}
