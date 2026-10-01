import { Component, signal } from '@angular/core';
import { Navbar } from './Components/Navbar/navbar';
import { Sobre } from './Components/Sobre/sobre';
import { Projeto } from './Components/Projetos/projeto';
import { Habilidade } from './Components/Habilidades/habilidade';
import { Contato } from './Components/Contato/contato';

@Component({
  imports: [Navbar, Sobre, Projeto, Habilidade, Contato],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
