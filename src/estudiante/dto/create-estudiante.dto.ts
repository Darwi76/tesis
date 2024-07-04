import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;
    
    @IsNumber()
    @IsNotEmpty()
    nota: number;

    @IsNumber()
    @IsNotEmpty()
    provinciaId: number;

    @IsDate()
    @IsNotEmpty()
    periodo_ingreso: Date;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEmail()
    @IsNotEmpty()
    telefono: number;

    @IsBoolean()
    @IsNotEmpty()
    exonedaro: boolean;
}
