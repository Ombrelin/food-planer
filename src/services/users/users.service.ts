import { Injectable } from '@nestjs/common';
import { User } from "../../model/user.model";

@Injectable()
export class UsersService {

  private readonly users: Array<User> = [
    new User("1", "Test 1", "Test 1"),
    new User("2", "Test 1", "Test 1"),
  ];

  async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username);
  }
}
