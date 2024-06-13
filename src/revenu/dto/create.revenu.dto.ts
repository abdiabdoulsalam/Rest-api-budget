import { Column } from "typeorm";

export class CreateRevenuDto {
    @Column()
    titre: string;

    @Column()
    montant: number;
}