import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resultat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    budget: number;

    @Column()
    depenses: number;

    @Column()
    solde: number;
}