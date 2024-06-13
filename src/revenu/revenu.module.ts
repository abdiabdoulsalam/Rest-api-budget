import { Module } from '@nestjs/common';
import { RevenuController } from './revenu.controller';
import { RevenuService } from './revenu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './entity/revenu.entity';

@Module({
  controllers: [RevenuController],
  providers: [RevenuService],
  exports: [RevenuService],
  imports: [TypeOrmModule.forFeature([Revenu])],
})
export class RevenuModule { }
