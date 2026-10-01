import { Component, inject } from '@angular/core';
import { TraducaoService } from '../../../Traducao/traducao.service';

interface ItemNavbar {
    titulo: 'sobre' | 'projetos' | 'habilidades' | 'contato';
    url: string;
    icone: string;
}

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.html',
})
export class Navbar {

    traducao = inject(TraducaoService);

    itens: ItemNavbar[] = [
        {
            titulo: 'sobre',
            url: '#sobre',
            icone: 'bi-person'
        },
        {
            titulo: 'projetos',
            url: '#projetos',
            icone: 'bi-code-slash'
        },
        {
            titulo: 'habilidades',
            url: '#habilidades',
            icone: 'bi-stars'
        },
        {
            titulo: 'contato',
            url: '#contato',
            icone: 'bi-envelope'
        }
    ];

    alterarIdioma(idioma: OpcoesIdioma): void {
        this.traducao.alterarIdioma(idioma);
    }
}

type OpcoesIdioma = 'pt' | 'en' | 'es'