import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SalepersonDto } from './dto'; // Assuming you have a DTO for Saleperson
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { tbl_saleperson } from 'generated/client';

@Injectable()
export class SalepersonService {
  constructor(private prisma: PrismaService) {}

  async createSaleperson(
    salepersonDto: SalepersonDto,
  ): Promise<tbl_saleperson> {
    const saleperson = await this.prisma.tbl_saleperson.findUnique({
      where: {
        spmobile: salepersonDto.spmobile,
      },
    });

    if (saleperson) {
      throw new HttpException(
        'Saleperson with mobile already exists.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newSaleperson = await this.prisma.tbl_saleperson.create({
      data: {
        ...salepersonDto,
        spcreated: new Date(),
      },
    });

    if (!newSaleperson) {
      throw new HttpException(
        'Failed to create saleperson',
        HttpStatus.BAD_REQUEST,
      );
    }

    return newSaleperson;
  }

  async getAllSalepersons() {
    const salepersons = await this.prisma.tbl_saleperson.findMany();
    return salepersons;
  }

  async getSalepersonById(salepersonId: number) {
    const saleperson = await this.prisma.tbl_saleperson.findUnique({
      where: {
        spid: salepersonId,
      },
    });

    if (!saleperson) {
      throw new HttpException('Saleperson Not Found', HttpStatus.BAD_REQUEST);
    }

    return saleperson;
  }

  async updateSaleperson(salepersonId: number, data): Promise<tbl_saleperson> {
    try {
      const updatedSaleperson = await this.prisma.tbl_saleperson.update({
        where: {
          spid: salepersonId,
        },
        data: {
          ...data,
        },
      });
      return updatedSaleperson;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'Mobile number already taken.',
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        throw error;
      }
    }
  }

  async deactivateSaleperson(salepersonId: number) {
    const deactivatedSaleperson = await this.updateSaleperson(salepersonId, {
      spstatus: 'inactive',
    });
    return deactivatedSaleperson;
  }

  async activateSaleperson(salepersonId: number) {
    const activatedSaleperson = await this.updateSaleperson(salepersonId, {
      spstatus: 'active',
    });
    return activatedSaleperson;
  }
}
