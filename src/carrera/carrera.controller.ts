import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Get('prosecution')
  findAllProsecution() {
    return this.carreraService.findAllProsecution();
  }
  
  @Get('convocation')
  findAllConvocation() {
    return this.carreraService.findAllConvocation();
  }
  
  @Get('student')
  findAllStudent() {
    return this.carreraService.findAllStudent();
  }

  @Get('exonerated')
  findAllExonerated() {
    return this.carreraService.findAllExonerated();
  }
  @Get('result')
  findAllResult() {
    return this.carreraService.findAllResult();
  }

  @Get('year')
  findAllYear() {
    return this.carreraService.findAllYear();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carreraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(+id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraService.remove(+id);
  }

  
}
