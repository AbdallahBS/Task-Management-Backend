import { Injectable } from '@nestjs/common';
import { User } from '../user.entity'; // Assuming you have a User entity

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findOneById(id: number): User {
    return this.users.find(user => user.id === id);
  }
}
