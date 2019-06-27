import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'appy-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [MessageService]
})
export class SessionComponent implements OnInit {

  show1 = true;

  user: any;
  pass: any;

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSession(): void {

    this.messageService.addAll([
    {key: 'tc', severity: 'warn', summary: 'Enviando Al Servidor: ', detail: 'Usuario :' + this.user},
    {key: 'tc', severity: 'warn', summary: 'Enviando Al Servidor: ', detail: 'Contraseña :' + this.pass}
  ]);
    this.user = '';
    this.pass = '';
    this.router.navigate(['/main']); // si ruteo ésto desaparecen los msjs
  }
}
