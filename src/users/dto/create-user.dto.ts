import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.+\W+))(?![.\n])(?=.*[A-z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsEmail()
  email: string;
}
