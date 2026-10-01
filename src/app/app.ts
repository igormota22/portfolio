import { Component, signal } from '@angular/core';
import { Navbar } from './Components/Navbar/navbar';
import { Sobre } from './Components/Sobre/sobre';
import { Projeto } from './Components/Projetos/projeto';

@Component({
  imports: [Navbar, Sobre, Projeto],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
