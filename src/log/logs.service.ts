import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tbl_logs } from 'generated/client';
import { SuccessResponse } from 'src/common/type';
// import { simpleHandleCatch } from 'src/utilities/exception';

@Injectable()
export class LogsService {
  constructor(private prisma: PrismaService) {}

  async get_all_logs() {
    const logs = await this.prisma.tbl_logs.findMany({
      select: {
        logid: true,
        logtype: true,
        logref: true,
        logtext: true,
        logdt: true,
      },
      orderBy: {
        logdt: 'desc',
      },
    });
    return logs;
  }
}
