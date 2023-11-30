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
import { SalepersonService } from './saleperson.service';
import { SalepersonDto } from './dto';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InternalGuard } from 'src/common/guards';

@ApiTags('Sale Person')
@Controller('saleperson')
export class SalepersonController {
  constructor(private readonly salePersonService: SalepersonService) {}

  @Post('/create')
  @Public()
  @HttpCode(HttpStatus.OK)
  create_user(@Body() slaePersonDto: SalepersonDto) {
    return this.salePersonService.createSaleperson(slaePersonDto);
  }

  @Get()
  @ApiBearerAuth()
  @Public()
  //   @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_all_user() {
    return this.salePersonService.getAllSalepersons();
  }

  @Get(':user_id')
  @Public()
  @ApiBearerAuth()
  //   @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_user_by_id(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.salePersonService.getSalepersonById(user_id);
  }

  @Post(':user_id/deactivate')
  @ApiBearerAuth()
  @Public()
  //   @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  deactivate_user(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.salePersonService.deactivateSaleperson(user_id);
  }

  @Post(':user_id/activate')
  @ApiBearerAuth()
  @Public()
  //   @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  activate_user(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.salePersonService.activateSaleperson(user_id);
  }

  //   @Get('me')
  //   @ApiBearerAuth()
  //   @UseGuards(InternalGuard)
  //   @HttpCode(HttpStatus.OK)
  //   get_user_profile(@GetCurrentUserId() user_id: number) {
  //     return this.salePersonService.getSalepersonById(user_id);
  //   }
}
