import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { EmpresaService } from '../Servicios/empresa.service';
import { ListaEmpresa } from '../modelos/ListaEmpresa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  ArregloEmpresas:ListaEmpresa[] = [];

  nombre:string = '';
  razon:string = '';
  telefono:number = 0;
  correo:string = '';
  nit:number = 0;
  direccion:string = '';
  estado:string = '';
  data:string = '';

  constructor(
    private api:EmpresaService,
    private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.ngEditarEmpresa();
    
  }

  public ngEditarEmpresa(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.ObtenerEmpresa(id).subscribe( (result:any) =>{
      this.nombre = result['nombre_comercial'];
      this.razon = result['razon_social'];
      this.telefono = result['telefono'];
      this.correo = result['correo'];
      this.nit = result['nit'];
      this.direccion = result['direccion'];
      this.estado = result['estado'];
    })
  }


  ngEnviarDatosNuevos(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.data = "{\"empresa\": {" +
      "\"nombre_comercial\": \"" + this.nombre + "\"," +
      "\"razon_social\": \"" + this.razon + "\"," +
      "\"telefono\": \"" + this.telefono + "\"," +
      "\"correo\": \"" + this.correo + "\"," + 
      "\"nit\": \"" + this.nit + "\"," +
      "\"direccion\": \"" + this.direccion + "\"," +
      "\"estado\": \"" + this.estado + "\"}}"

      console.log(this.data);
      this.api.EditarEmpresa(id,this.data).subscribe(data =>{
        console.log(data);
      })
  }
}
