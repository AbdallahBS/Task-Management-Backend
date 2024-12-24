import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user.entity'; // Assuming you have a User entity

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: User) {
    const payload = { username: user.username, sub: user.id }; // Use user.id instead of user.userId
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
