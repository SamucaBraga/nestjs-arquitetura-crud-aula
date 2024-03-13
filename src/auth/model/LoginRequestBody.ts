import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.+\W+))(?![.\n])(?=.*[A-z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
