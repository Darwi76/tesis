import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { Provincia } from 'src/models';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
  imports: [TypeOrmModule.forFeature([Provincia])]
})
export class ProvinciaModule {}
