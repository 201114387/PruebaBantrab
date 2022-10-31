import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cinput',
  templateUrl: './cinput.component.html',
  styleUrls: ['./cinput.component.css']
})
export class CInputComponent implements OnInit {

  titulo:string = "";

  @Input() titulolabel:any; 
  @Input() Tipo:any; 
  @Input() Placeholder:any

  constructor() { }

  ngOnInit(): void {
  }

}
