import { Component, inject } from "@angular/core";
import { TraducaoService } from "../../../Traducao/traducao.service";

interface ItemProjeto {
    chave: 'geradorCertificados' | 'escolaCursos' | 'controleMedicamentos';
    tecnologias: string[];
    urlRepositorio: string;
    gif: string;
    placeholderParaGif: string;
    icone: string;
}


@Component({
    selector: 'app-projeto',
    imports: [],
    templateUrl: './projeto.html'
})

export class Projeto {
    itens: ItemProjeto[] = [
        {
            chave: 'geradorCertificados',

            tecnologias: [
                '.NET',
                'PostgreSQL',
                'Node.js',
                'React',
                'RabbitMQ',
                'JWT'
            ],

            urlRepositorio:
                'https://github.com/MergeSinConflitos/GeradorDeCerticados',

            gif: '',

            placeholderParaGif:
                'Demonstração do Gerador de Certificados',

            icone: 'bi-patch-check'
        },

        {
            chave: 'escolaCursos',

            tecnologias: [
                '.NET',
                'SQL Server',
                'Entity Framework',
                'Identity'
            ],

            urlRepositorio:
                'https://github.com/MergeSinConflitos/Escola-De-Cursos',

            gif: '/images/EscolaApp.gif',

            placeholderParaGif:
                'Demonstração da Escola de Cursos',

            icone: 'bi-mortarboard'
        },

        {
            chave: 'controleMedicamentos',

            tecnologias: [
                '.NET',
                'SQL Server'
            ],
            urlRepositorio:
                'https://github.com/MergeSinConflitos/Controle-de-Medicamentos-Web',

            gif: '/images/CdMWeb.gif',

            placeholderParaGif:
                'Demonstração de Controle de Medicamentos Web',

            icone: 'bi bi-prescription2'
        }
    ];

    demonstracaoAberta = false;
    demostracaoGif = '';
    placeholderParaGif = '';

    abrirDemonstracao(gif: string, placeholder: string): void {

        this.demonstracaoAberta = true;

        this.demostracaoGif = gif;

        this.placeholderParaGif = placeholder;
    }

    fecharDemonstracao(): void {

        this.demonstracaoAberta = false;

        this.demostracaoGif = '';
        this.placeholderParaGif = '';
    }

    traducao = inject(TraducaoService);
}