import { Component, inject } from '@angular/core';
import { TraducaoService } from '../../../Traducao/traducao.service';

@Component({
    selector: 'app-sobre',
    imports: [],
    templateUrl: './sobre.html',
})
export class Sobre {
    traducao = inject(TraducaoService);



}
