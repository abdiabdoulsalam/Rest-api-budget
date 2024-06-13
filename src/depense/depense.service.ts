import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { Repository } from 'typeorm';
import { CreateDepenseDto } from './dto/create.depense.dto';

@Injectable()
export class DepenseService {
    constructor(
        @InjectRepository(Depense)
        private depenseRepository: Repository<Depense>,
    ) { }

    get(): Promise<Depense[]> {
        return this.depenseRepository.find();
    }

    create(createdepensedto: CreateDepenseDto) {
        return this.depenseRepository.save(createdepensedto);
    }

    update(createdepensedto: CreateDepenseDto, userId: number) {
        return this.depenseRepository.update(userId, createdepensedto);
    }

    delete(userId: number) {
        return this.depenseRepository.delete(userId);
    }

    async createdepense(createdepenseDto: CreateDepenseDto): Promise<Depense> {
        const depenses = this.depenseRepository.create(createdepenseDto);
        return this.depenseRepository.save(depenses);
    }

    async findAll(): Promise<Depense[]> {
        return this.depenseRepository.find();
    }
}
