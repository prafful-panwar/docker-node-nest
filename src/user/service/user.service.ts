import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../models/user.entity';
import { userInterface } from '../models/user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEntity)
    private userRepository: Repository<userEntity>,
  ) {}

  add(user: userInterface): Observable<userInterface> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<userInterface[]> {
    return from(this.userRepository.find());
  }
}
