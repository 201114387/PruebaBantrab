import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../Servicios/empresa.service';
import { ListaEmpresa } from '../modelos/ListaEmpresa'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nombre:string = '';
  razon: string = '';
  telefono:number = 0;
  correo:string = '';
  nit:number = 0;
  direccion:string = '';
  estado:string = '';
  created_at:string = '';
  updated_at:string = '';

  data:string = '';

  constructor(private api:EmpresaService) {
    
   }

  ngOnInit(): void {
  }


  ngCrearEmpresa(){
    this.data = "{\"empresa\": {" +
      "\"nombre_comercial\": \"" + this.nombre + "\"," +
      "\"razon_social\": \"" + this.razon + "\"," +
      "\"telefono\": \"" + this.telefono + "\"," +
      "\"correo\": \"" + this.correo + "\"," + 
      "\"nit\": \"" + this.nit + "\"," +
      "\"direccion\": \"" + this.direccion + "\"," +
      "\"estado\": \"" + this.estado + "\"}}"

      console.log(this.data);
      this.api.CrearEmpresa(this.data).subscribe(data =>{
        console.log(data);
      })
    
  }
    


}
