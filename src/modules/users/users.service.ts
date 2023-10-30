import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { UserEntity } from '../../database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userEmail = createUserDto.email.trim();
    const findUser = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    if (findUser) {
      throw new HttpException('User already exist', HttpStatus.CONFLICT);
    }

    const newUser = this.userRepository.create(createUserDto);

    await this.userRepository.save(newUser);
    return newUser;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const findUsers = await this.userRepository.findOneBy({ id });
    if (!findUsers) {
      throw new HttpException('User entity not found', HttpStatus.NOT_FOUND);
    }
    return findUsers;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const findUser = await this.userRepository.findOneBy({ id });

    if (!findUser) {
      throw new HttpException('User entity not found', HttpStatus.NOT_FOUND);
    }

    this.userRepository.merge(findUser, updateUserDto);
    return await this.userRepository.save(findUser);
    return findUser;
  }

  async remove(id: string) {
    const entry = await this.userRepository.findOneBy({ id });
    await this.userRepository.remove(entry);
  }
}
