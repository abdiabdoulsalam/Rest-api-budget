import { Controller, Get } from '@nestjs/common';
import { ResultatService } from './resultat.service';

@Controller('resultat')
export class ResultatController {
    constructor(private readonly resultatService: ResultatService) { }

    @Get('/budget')
    async getTotalMontant() {
        return this.resultatService.getTotalMontant();
    }

    @Get('/depenses')
    async getTotalMontantdepense() {
        return this.resultatService.getTotalMontantdepense();
    }

    @Get('/solde')
    async getsolde() {
        return this.resultatService.getsolde();
    }
}
