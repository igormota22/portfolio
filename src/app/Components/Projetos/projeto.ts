import { Component } from "@angular/core";

@Component({
    selector: 'app-projeto',
    imports: [],
    templateUrl: './projeto.html'
})
export class Projeto {

    itens = [
        {
            titulo: 'Gerador de Certificados',
            descricao: 'Aplicação para geração e gerenciamento de certificados, permitindo o cadastro de cursos e alunos e a geração automatizada de certificados em PDF.',
            tecnologias: [
                '.NET',
                'PostgreSQL',
                'Node.js',
                'React',
                'RabbitMQ',
                'JWT'
            ],
            urlRepositorio: 'https://github.com/MergeSinConflitos/GeradorDeCerticados',
            gif: '',
            placeholderParaGif: 'Demonstração do Gerador de Certificados',
            icone: 'bi-patch-check'
        },

        {
            titulo: 'Escola de Cursos',
            descricao: 'Aplicação para gerenciamento de alunos, professores, matrículas e cursos, permitindo operações de cadastro, edição, exclusão e visualização.',
            tecnologias: [
                '.NET',
                'SQL Server',
                'Entity Framework',
                'Identity'
            ],
            urlRepositorio: 'https://github.com/MergeSinConflitos/Escola-De-Cursos',
            gif: '/images/EscolaApp.gif',
            placeholderParaGif: 'Demonstração da Escola de Cursos',
            icone: 'bi-mortarboard'
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
}