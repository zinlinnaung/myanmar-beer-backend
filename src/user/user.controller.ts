import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto';
import { Role } from 'generated/client';
import { Roles, GetCurrentUserId, Public } from 'src/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InternalGuard } from 'src/common/guards';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @Public()
  @HttpCode(HttpStatus.OK)
  create_user(@Body() userDto: UserDto) {
    return this.userService.create_user(userDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_all_user() {
    return this.userService.get_all_user();
  }

  @Get(':user_id')
  @ApiBearerAuth()
  @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_user_by_id(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.userService.get_user_by_id(user_id);
  }

  @Post(':user_id/deactivate')
  @ApiBearerAuth()
  @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  deactivate_user(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.userService.deactivate_user(user_id);
  }

  @Post(':user_id/activate')
  @ApiBearerAuth()
  @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  activate_user(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.userService.activate_user(user_id);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_user_profile(@GetCurrentUserId() user_id: number) {
    return this.userService.get_user_by_id(user_id);
  }
}
