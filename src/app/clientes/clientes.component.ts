import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente: Cliente ={id:1, 
    nome:"Pedro", 
    cpf:"1245554",
    dataNascimento:null,
    email:"test.test@test.com",
    strDataNascimento:"",
    nacionalidade:"Brasileira",
    naturalidade: "Pernambuco"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
