import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}


  async login(secreta:LoginDto) {
    const secret = this.configService.get('JWT_SECRET');
    if(secreta.secret !== secret){
    throw new UnauthorizedException('La palabra secreta no coincide')
}
    const payload = {
      acceso: 'Usted tiene acceso'
    };
    return {
      access_token: await this.jwtService.signAsync(payload, { secret }),
    };
  }
}
