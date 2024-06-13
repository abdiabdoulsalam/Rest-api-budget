import { Column } from "typeorm";

export class CreateDepenseDto {
    @Column()
    titre_depense: string;

    @Column()
    montant_depense: number;
}