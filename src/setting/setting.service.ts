import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SettingDto } from './dto';
import { tbl_settings } from 'generated/client';

@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  async createSetting(settingDto: SettingDto): Promise<tbl_settings> {
    // const saleperson = await this.prisma.tbl_settings.findUnique({
    //   where: {
    //     spmobile: salepersonDto.spmobile,
    //   },
    // });

    // if (saleperson) {
    //   throw new HttpException(
    //     'Saleperson with mobile already exists.',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }

    const newSaleperson = await this.prisma.tbl_settings.create({
      data: {
        ...settingDto,
      },
    });

    if (!newSaleperson) {
      throw new HttpException(
        'Failed to create setting',
        HttpStatus.BAD_REQUEST,
      );
    }

    return newSaleperson;
  }

  async getAllSetting() {
    const setting = await this.prisma.tbl_settings.findMany();
    return setting;
  }
}
