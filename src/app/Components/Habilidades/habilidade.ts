import { Component, inject } from "@angular/core";
import { HabilidadesIdioma, TraducaoService } from "../../../Traducao/traducao.service";


interface ItemHabilidade {
    chave: keyof HabilidadesIdioma['cards'];
    icone: string;
}

@Component({
    selector: 'app-habilidade',
    imports: [],
    templateUrl: './habilidade.html'
})
export class Habilidade {

    constructor(public traducao: TraducaoService) { }

    itens: ItemHabilidade[] = [
        { chave: 'dotnet', icone: 'dotnet' },
        { chave: 'csharp', icone: 'cs' },
        { chave: 'aspnet', icone: 'dotnet' },
        { chave: 'entityFramework', icone: 'dotnet' },
        { chave: 'apiRest', icone: '' },
        { chave: 'mediatr', icone: '' },
        { chave: 'jwt', icone: '' },
        { chave: 'sql', icone: '' },
        { chave: 'postgresql', icone: 'postgres' },
        { chave: 'sqlServer', icone: '' },
        { chave: 'rabbitmq', icone: 'rabbitmq' },
        { chave: 'docker', icone: 'docker' },
        { chave: 'testes', icone: '' },
        { chave: 'identity', icone: '' },
        { chave: 'angular', icone: 'angular' },
        { chave: 'typescript', icone: 'ts' },
        { chave: 'react', icone: 'react' },
        { chave: 'javascript', icone: 'js' },
        { chave: 'html', icone: 'html' },
        { chave: 'css', icone: 'css' },
        { chave: 'nodejs', icone: 'nodejs' },
        { chave: 'java', icone: 'java' },
        { chave: 'git', icone: 'git' },
        { chave: 'github', icone: 'github' },
        { chave: 'vscode', icone: 'vscode' }
    ];


}