import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tbl_outlet } from 'generated/client';
import { SuccessResponse } from 'src/common/type';
// import { simpleHandleCatch } from 'src/utilities/exception';

@Injectable()
export class OutletService {
  constructor(private prisma: PrismaService) {}

  async get_all_outlets() {
    const logs = await this.prisma.tbl_outlet.findMany({
      select: {
        olid: true,
        olregion: true,
        olcity: true,
        oltsp: true,
        olname: true,
      },
      orderBy: {
        olid: 'desc',
      },
    });
    return logs;
  }
}
