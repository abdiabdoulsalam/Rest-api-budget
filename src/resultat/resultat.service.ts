import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RevenuService } from 'src/revenu/revenu.service';
import { Repository } from 'typeorm';
import { Resultat } from './entity/resultat.entity';
import { DepenseService } from 'src/depense/depense.service';
import { CreateDepenseDto } from './dto/create.resultat.dto';

@Injectable()
export class ResultatService {
    resultatRepository: any;
    constructor(
        @InjectRepository(Resultat)
        private revenuRepository: Repository<Resultat>,
        private revenuService: RevenuService,
        private depenseService: DepenseService,
    ) { }

    async getTotalMontant(): Promise<number> {
        const revenus = await this.revenuService.findAll();

        const total = revenus.reduce((sum, revenu) => sum + revenu.montant, 0);
        return total;
    }

    async getTotalMontantdepense(): Promise<number> {
        const depenses = await this.depenseService.findAll();
        const total = depenses.reduce((sum, depense) => sum + depense.montant_depense, 0);

        return total;
    }

    async getsolde(): Promise<number> {
        const depense = await this.getTotalMontantdepense();
        const revenu = await this.getTotalMontant();

        const solde = revenu - depense;

        return solde;
    }

    async createResultat(): Promise<Resultat> {
        const totalMontant = await this.getTotalMontant();
        const totalMontantdepense = await this.getTotalMontantdepense();
        const solde = await this.getsolde();
        const newResultat = this.resultatRepository.create({
            budget: totalMontant,
            depenses: totalMontantdepense,
            solde: solde,
        });
        return this.resultatRepository.save(newResultat);
    }

}
