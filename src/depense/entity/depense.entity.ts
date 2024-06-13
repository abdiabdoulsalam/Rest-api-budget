import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Depense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre_depense: string;

    @Column()
    montant_depense: number;
}