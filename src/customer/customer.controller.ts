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
  @Get('/i/count/success')
  @HttpCode(HttpStatus.OK)
  //hello
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async get_all_success_count() {
    return this.customerService.get_all_success_count();
  }
  @Get('/i/count/failed')
  @HttpCode(HttpStatus.OK)
  //hello
  // @UseGuards(InternalGuard)
  @Public()
  @ApiBearerAuth()
  async get_all_failed_count() {
    return this.customerService.get_all_fail_count();
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

  @Public()
  @Get('/i/filter/city-count')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getCityCountByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return this.customerService.getCityCountByDateRange(
      parsedStartDate,
      parsedEndDate,
    );
  }
  @Public()
  @Get('/i/filter/winitem-count')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(InternalGuard)
  @ApiBearerAuth()
  async getWinItemCountByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return this.customerService.getWinItemCountByDateRange(
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
