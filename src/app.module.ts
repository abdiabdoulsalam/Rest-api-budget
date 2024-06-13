import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RevenuModule } from './revenu/revenu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './revenu/entity/revenu.entity';
import { DepenseModule } from './depense/depense.module';
import { Depense } from './depense/entity/depense.entity';
import { ResultatModule } from './resultat/resultat.module';
import { Resultat } from './resultat/entity/resultat.entity';
import { ResultatController } from './resultat/resultat.controller';

@Module({
  imports: [RevenuModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'budget',
      entities: [Revenu, Depense, Resultat],
      synchronize: true,
    }),
    DepenseModule,
    ResultatModule,
  ],
  controllers: [AppController, ResultatController],
  providers: [],
})
export class AppModule { }
