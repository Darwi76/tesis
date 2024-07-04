import { Injectable } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Provincia } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinciaService {

  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ){}

  create(createProvinciaDto: CreateProvinciaDto) {
    const provincia = this.provinciaRepository.create({
      nombre:createProvinciaDto.nombre
    })
    console.log(provincia)
    return this.provinciaRepository.save(provincia);
  }

  findAll() {
    return this.provinciaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} provincia`;
  }

  update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    return `This action updates a #${id} provincia`;
  }

  remove(id: number) {
    return `This action removes a #${id} provincia`;
  }
}
