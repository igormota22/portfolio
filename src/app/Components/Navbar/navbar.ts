import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [],
    templateUrl: './navbar.html',
})
export class Navbar {

    itens = [
        {
            titulo: 'Sobre',
            url: '#sobre',
            icone: 'bi-person'
        },
        {
            titulo: 'Projetos',
            url: '#projetos',
            icone: 'bi-code-slash'
        },
        {
            titulo: 'Contato',
            url: '#contato',
            icone: 'bi-envelope'
        }
    ];

}