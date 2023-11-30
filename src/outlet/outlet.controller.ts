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
import { tbl_outlet } from 'generated/client';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { OutletService } from './outlet.service';
import { SuccessResponse } from 'src/common/type';
import { ExternalGuard, InternalGuard } from 'src/common/guards';

@ApiTags('outlet')
@Controller('outlet')
export class OutletController {
  constructor(private outletService: OutletService) {}

  @Get('/i/list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async get_all_outlets() {
    return this.outletService.get_all_outlets();
  }

  @Get('/cities')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getUniqueCities() {
    return this.outletService.getUniqueCities();
  }

  @Get('/tsp/:city')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getTspByCity(@Param('city') city: string) {
    return this.outletService.getTspByCity(city);
  }

  @Get('/names/:tsp')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getNamesByTsp(@Param('tsp') tsp: string) {
    return this.outletService.getNamesByTsp(tsp);
  }
}
