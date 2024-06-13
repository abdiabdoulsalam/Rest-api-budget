import { Module } from '@nestjs/common';
import { DepenseController } from './depense.controller';
import { DepenseService } from './depense.service';
import { Depense } from './entity/depense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DepenseController],
  providers: [DepenseService],
  imports: [TypeOrmModule.forFeature([Depense])],
  exports: [DepenseService],
})
export class DepenseModule {}
