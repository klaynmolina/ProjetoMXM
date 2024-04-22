import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { environmentDevelopment } from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../Models/Pessoa';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private urlAPIDevelopment = `${environmentDevelopment.API_URL}/Pessoa`
  private urlAPI = `${environment.API_URL}/Pessoa`

  constructor(private http: HttpClient) { }

  GetPessoas() : Observable<Response<Pessoa[]>> {
    return this.http.get<Response<Pessoa[]>>(this.urlAPI+"/listarTodos");
  }
}
