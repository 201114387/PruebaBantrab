import { Injectable } from '@angular/core';
import { ListaEmpresa } from '../modelos/ListaEmpresa'
import { Header } from '../modelos/Headers'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url:string = '';

  constructor(private http:HttpClient) { 
  }

  ObtenerTodasLasEmpresas():Observable<ListaEmpresa[]>{
    this.url = 'https://apitest-bt.herokuapp.com/api/v1/empresas';
    return this.http.get<ListaEmpresa[]>(this.url,{headers:{user:"User123", password:"Password123"}});
  }

  CrearEmpresa(data:string):Observable<string[]>{
    this.url = 'https://apitest-bt.herokuapp.com/api/v1/empresas';
    return this.http.post<string[]>(this.url,data,{headers:{user:"User123", password:"Password123"}});
  }
}
