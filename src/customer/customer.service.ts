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
  async getCustomerByDateRange(startDate: Date | null, endDate: Date | null) {
    let whereCondition: { gdt?: { gte?: string; lte?: string } } = {};

    if (startDate !== null && endDate !== null) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);

      whereCondition = {
        gdt: {
          gte: startDate.toISOString(),
          lte: adjustedEndDate.toISOString(),
        },
      };
    }

    const customers = await this.prisma.tbl_gtrans.findMany({
      where: whereCondition,
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

  async getCustomerCountByDateRange(
    startDate: Date | null,
    endDate: Date | null,
  ): Promise<number> {
    let whereCondition: { gdt?: { gte?: string; lte?: string } } = {};

    if (startDate !== null && endDate !== null) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);

      whereCondition = {
        gdt: {
          gte: startDate.toISOString(),
          lte: adjustedEndDate.toISOString(),
        },
      };
    }

    const count = await this.prisma.tbl_gtrans.count({
      where: whereCondition,
    });

    return count;
  }

  async get_all_customer_count() {
    const count = await this.prisma.tbl_gtrans.count({
      orderBy: {
        gdt: 'desc',
      },
    });
    return count;
  }

  async get_all_success_count() {
    const count = await this.prisma.tbl_gtrans.count({
      where: {
        gstatus: 'success',
      },
      orderBy: {
        gdt: 'desc',
      },
    });
    return count;
  }
  async get_all_fail_count() {
    const count = await this.prisma.tbl_gtrans.count({
      where: {
        gstatus: 'failed',
      },
      orderBy: {
        gdt: 'desc',
      },
    });
    return count;
  }

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

  async getCityCountByDateRange(
    startDate: Date | null,
    endDate: Date | null,
  ): Promise<{ olcity: string; count: number }[]> {
    let whereCondition: { gdt?: { gte?: string; lte?: string } } = {};

    if (startDate !== null && endDate !== null) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);

      whereCondition = {
        gdt: {
          gte: startDate.toISOString(),
          lte: adjustedEndDate.toISOString(),
        },
      };
    }

    const cityCounts = await this.prisma.tbl_gtrans.groupBy({
      by: ['olcity'],
      _count: true,
      where: whereCondition,
    });

    return cityCounts.map((result) => ({
      olcity: result.olcity,
      count: result._count,
    }));
  }

  async getCityCount(): Promise<{ olcity: string; count: number }[]> {
    const cityCounts = await this.prisma.tbl_gtrans.groupBy({
      by: ['olcity'],
      _count: true,
    });

    return cityCounts.map((result) => ({
      olcity: result.olcity,
      count: result._count,
    }));
  }

  async getWinItemCount(): Promise<{ gcwinitem: string; count: number }[]> {
    const winItemCount = await this.prisma.tbl_gtrans.groupBy({
      by: ['gcwinitem'],
      _count: true,
    });

    return winItemCount.map((result) => ({
      gcwinitem: result.gcwinitem,
      count: result._count,
    }));
  }
  async getWinItemCountByDateRange(
    startDate: Date,
    endDate: Date,
  ): Promise<{ gcwinitem: string; count: number }[]> {
    let whereCondition: { gdt?: { gte?: string; lte?: string } } = {};

    if (startDate !== null && endDate !== null) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);

      whereCondition = {
        gdt: {
          gte: startDate.toISOString(),
          lte: adjustedEndDate.toISOString(),
        },
      };
    }

    const cityCounts = await this.prisma.tbl_gtrans.groupBy({
      by: ['gcwinitem'],
      _count: true,
      where: whereCondition,
    });

    return cityCounts.map((result) => ({
      gcwinitem: result.gcwinitem,
      count: result._count,
    }));
  }
}
