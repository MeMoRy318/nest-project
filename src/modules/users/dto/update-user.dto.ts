import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    type: String,
    required: false,
    minimum: 2,
    maximum: 25,
    example: 'Bred',
  })
  userName: string;

  @ApiProperty({ type: String, required: false, example: 'example@gmail.com' })
  email: string;

  @ApiProperty({ type: String, required: false, example: 'Lviv' })
  city: string;

  @ApiProperty({
    type: Number,
    required: false,
    example: 18,
    minimum: 16,
    maximum: 99,
  })
  age: number;

  @ApiProperty({ type: Boolean, required: false })
  status: boolean;
}
