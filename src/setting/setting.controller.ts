import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SettingService } from './setting.service';
import { Public } from 'src/common/decorators';
import { SettingDto } from './dto';

@ApiTags('Setting')
@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Post('/create')
  @Public()
  @HttpCode(HttpStatus.OK)
  create_user(@Body() settingDto: SettingDto) {
    return this.settingService.createSetting(settingDto);
  }

  @Get()
  @ApiBearerAuth()
  @Public()
  //   @UseGuards(InternalGuard)
  @HttpCode(HttpStatus.OK)
  get_all_user() {
    return this.settingService.getAllSetting();
  }
}
