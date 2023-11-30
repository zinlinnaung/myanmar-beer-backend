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
import { tbl_gtrans } from 'generated/client';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { CustomerService } from './customer.service';
import { SuccessResponse } from 'src/common/type';
import { ExternalGuard, InternalGuard } from 'src/common/guards';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get('/i/list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async get_all_customer_internal() {
    return this.customerService.get_all_customer_internal();
  }

  @Get('/i/city-count')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getCityCount() {
    return this.customerService.getCityCount();
  }

  @Get('/i/winitem-count')
  @HttpCode(HttpStatus.OK)
  @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getWinItemCount() {
    return this.customerService.getWinItemCount();
  }
}
