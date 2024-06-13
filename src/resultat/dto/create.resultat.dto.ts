import { Column } from "typeorm";

export class CreateDepenseDto {
    @Column()
    budget: number;

    @Column()
    depenses: number;

    @Column()
    solde: number;

}

