import { UserDto } from '../user/dto/user.dto';

import UserEntity from 'src/user/user.entity';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, email } = data;

  const userDto: UserDto = {
    id,
    email,
  };

  return userDto;
};
