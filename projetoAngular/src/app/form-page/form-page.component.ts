import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public email: string ;

  constructor() { }

  ngOnInit(): void {
    this.formTitle = "Pagina Form";
    this.formDescription = "Descricao depois de iniciar o componente";
  }

}
