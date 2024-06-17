import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from 'src/models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = new Estudiante();
    estudiante.nombre = 'PedroPedroPedroPePePe';
    estudiante.apellidos = 'DPEPDPE';
    estudiante.nota = 0;
    return this.estudianteRepository.save(estudiante);
  }

  async findAll(provincia: string) {
    const province = await this.estudianteRepository.find({
      relations: ['provincia'],
    });

    if (provincia) {
      province.forEach((province) => {
        if (province.provincia.nombre !== provincia) {
          return province;
        }
      });
    }
    return province;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
