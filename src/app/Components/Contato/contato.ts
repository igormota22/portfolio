import { Component } from '@angular/core';
import { TraducaoService } from '../../../Traducao/traducao.service';

@Component({
    selector: 'app-contato',
    imports: [],
    templateUrl: './contato.html',
})
export class Contato {

    constructor(public traducao: TraducaoService) { }

}