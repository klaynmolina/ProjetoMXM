import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ViaCepService {

  constructor(private http: HttpClient) { }

  // getAddressByCep(cep: string): Observable<any> {
  //   const url = `https://viacep.com.br/ws/${cep}/json/`;
  //   return this.http.get(url);
  // }

  async getAddressByCep(cep: string): Promise<any> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return await this.http.get(url).toPromise();
  }
  
  async buscarEndereco(cep: string): Promise<string> {
    const data = await this.getAddressByCep(cep);
    if (data.erro) {      
      return `${data.erro}`;
    } else {
      return `${data.logradouro}, ${data.bairro}, ${data.localidade}-${data.uf} || CEP: ${data.cep}`;
    }
  }

}
