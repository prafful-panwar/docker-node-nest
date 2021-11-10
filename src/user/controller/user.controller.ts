import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { userInterface } from '../models/user.interface';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() user: userInterface): Observable<userInterface> {
    return this.userService.add(user);
  }

  @Get()
  findAll(): Observable<userInterface[]> {
    return this.userService.findAll();
  }
}
