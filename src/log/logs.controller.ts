import {
  Body,
  Controller,
  Query,
  Get,
  HttpCode,
  ParseIntPipe,
  Param,
  HttpStatus,
  Post,
  Put,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { tbl_logs } from 'generated/client';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { LogsService } from './logs.service';
import { SuccessResponse } from 'src/common/type';
import { ExternalGuard, InternalGuard } from 'src/common/guards';

@ApiTags('logs')
@Controller('logs')
export class LogsController {
  constructor(private logsService: LogsService) {}

  @Get('/i/list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async get_all_logs() {
    return this.logsService.get_all_logs();
  }
}
