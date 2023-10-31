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
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(25)
  city: string;

  @IsNumber()
  @Min(16)
  @Max(99)
  age: number;

  @IsBoolean()
  status: boolean;
}
