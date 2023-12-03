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
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async get_all_customer_internal() {
    return this.customerService.get_all_customer_internal();
  }

  @Get('/i/count/list')
  @HttpCode(HttpStatus.OK)
  //hello
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async get_all_customer_count() {
    return this.customerService.get_all_customer_count();
  }

  @Get('/i/date-range')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async getCustomerByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    // Parse the string dates into Date objects (you may need to adjust the format based on your frontend)
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;

    return this.customerService.getCustomerByDateRange(
      parsedStartDate,
      parsedEndDate,
    );
  }
  @Get('/i/count/date-range')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async getCustomerCountByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    // Parse the string dates into Date objects (you may need to adjust the format based on your frontend)
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;

    return this.customerService.getCustomerCountByDateRange(
      parsedStartDate,
      parsedEndDate,
    );
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
