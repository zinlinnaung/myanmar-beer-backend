import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tbl_gtrans } from 'generated/client';
import { SuccessResponse } from 'src/common/type';
// import { simpleHandleCatch } from 'src/utilities/exception';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  // async get_all_announcement(): Promise<Announcement[]> {
  //   return this.prisma.announcement.findMany();
  // }

  async get_all_customer_internal() {
    const customers = await this.prisma.tbl_gtrans.findMany({
      select: {
        gtid: true,
        olname: true,
        gcumobile: true,
        gcwinitem: true,
        gstatus: true,
        gdt: true,
      },
      orderBy: {
        gdt: 'desc',
      },
    });
    return customers;
  }
}
