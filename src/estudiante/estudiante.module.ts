import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { Estudiante, Provincia } from 'src/models';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([Estudiante, Provincia])]
})
export class EstudianteModule {}
