import { Component } from "@angular/core";

@Component({
    selector: 'app-projeto',
    imports: [],
    templateUrl: './projeto.html'
})
export class Projeto {
    demonstracaoAberta = false;

    abrirDemonstracao(): void {
        this.demonstracaoAberta = true;
    }

    fecharDemonstracao(): void {
        this.demonstracaoAberta = false;
    }
}