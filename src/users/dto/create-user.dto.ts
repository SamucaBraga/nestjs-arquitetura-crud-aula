import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends User {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Password should be at least 8 characteres long',
    example: 'Abc@123',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.+\W+))(?![.\n])(?=.*[A-z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    description: 'Email address',
    example: 'johndoe@gmail.com',
  })
  @IsEmail()
  email: string;
}
