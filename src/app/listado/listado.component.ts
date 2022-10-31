import { Component, OnInit } from '@angular/core';
import { ListaEmpresa } from '../modelos/ListaEmpresa';
import { EmpresaService} from '../Servicios/empresa.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  title = 'PruebaEmpresas';

  ArregloEmpresas:ListaEmpresa[] = [];

  constructor(private api:EmpresaService){}

  ngOnInit(): void {
    this.api.ObtenerTodasLasEmpresas().subscribe(data =>{
      this.ArregloEmpresas = data;
    })
  }

}
