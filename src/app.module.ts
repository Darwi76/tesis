import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera, Estudiante, Provincia } from "./models";
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { CarreraModule } from './carrera/carrera.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath:'./.env',
      isGlobal:true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async() => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          logging: true,
          synchronize: true,
          entities: [Carrera, Estudiante, Provincia],
        }
      }
    }),
    EstudianteModule,
    ProvinciaModule,
    CarreraModule
  ],

})
export class AppModule {

  }
