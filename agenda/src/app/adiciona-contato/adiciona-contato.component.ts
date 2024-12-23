import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../models/contato';
import { Grupo } from '../models/grupo';


@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  contatos: Contato[] = [];
  Grupo = Grupo;
  grupos: (keyof typeof Grupo)[];

  constructor(private agenda: AgendaService) {
    this.grupos = Object.keys(Grupo) as (keyof typeof Grupo)[];
  }

  adicionar(nome: string, telefone: string, email: string, data: string, grupo: string): void {
    const grupoEnum = Grupo[grupo as keyof typeof Grupo];
    const pessoa = new Contato(nome, telefone, email, data, grupoEnum);

    if (this.agenda.adicionarContato(pessoa)) {
      console.log("Contato adicionado com sucesso");
    }
  }
}
