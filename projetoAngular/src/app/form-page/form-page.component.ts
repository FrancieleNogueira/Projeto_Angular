import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public emails: string;

  public emailsLocal = [];

  constructor(private emailService: EmailService) {
    this.emailsLocal = emailService.emails;
   }
    

  ngOnInit(): void {
    this.formTitle = "Pagina Form";
    this.formDescription = "Descricao depois de iniciar o componente";
  }

  public adicionarEmails(){
    if (this.emails) {
     this.emailService.emails.push(this.emails);  
    }
  }

}