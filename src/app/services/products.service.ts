import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    const url = 'http://etsol.bbjetcloud.com/test-hojeda/conjuntos/28/articulos';
    const options: any = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      accept: '*/*',
      EmpId: '1',
      authorization: 'Basic REVNTzpERU1P'
    })
  };
    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data._embedded.articuloResources))
    .catch(error => console.error('Error al leer la api', error));
  }
}
