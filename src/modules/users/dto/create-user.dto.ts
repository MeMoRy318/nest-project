import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    minimum: 2,
    maximum: 25,
    example: 'Bred',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  userName: string;

  @ApiProperty({ type: String, required: true, example: 'example@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ type: String, required: false, example: 'Lviv' })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(25)
  city: string;

  @ApiProperty({
    type: Number,
    required: false,
    example: 18,
    minimum: 16,
    maximum: 99,
  })
  @IsNumber()
  @IsOptional()
  @Min(16)
  @Max(99)
  age: number;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
