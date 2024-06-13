import { Module } from '@nestjs/common';
import { ResultatController } from './resultat.controller';
import { ResultatService } from './resultat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultat } from './entity/resultat.entity';
import { RevenuModule } from 'src/revenu/revenu.module';
import { DepenseModule } from 'src/depense/depense.module';

@Module({
  controllers: [ResultatController],
  providers: [ResultatService],
  imports: [TypeOrmModule.forFeature([Resultat]), RevenuModule, DepenseModule],
  exports: [ResultatService],
})
export class ResultatModule {}
