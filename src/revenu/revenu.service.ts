import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenu } from './entity/revenu.entity';
import { Repository } from 'typeorm';
import { CreateRevenuDto } from './dto/create.revenu.dto';

@Injectable()
export class RevenuService {
    constructor(
        @InjectRepository(Revenu)
        private revenuRepository: Repository<Revenu>,
    ) { }

    get(): Promise<Revenu[]> {
        return this.revenuRepository.find()
    }

    create(createrevenudto: CreateRevenuDto) {
        return this.revenuRepository.save(createrevenudto);
    }

    update(createrevenudto: CreateRevenuDto, userId: number) {
        return this.revenuRepository.update(userId, createrevenudto);
    }

    delete(userId: number) {
        return this.revenuRepository.delete(userId);
    }

    async createrevenu(createRevenuDto: CreateRevenuDto): Promise<Revenu> {
        const revenu = this.revenuRepository.create(createRevenuDto);
        return this.revenuRepository.save(revenu);
    }

    async findAll(): Promise<Revenu[]> {
        return this.revenuRepository.find();
    }
}
