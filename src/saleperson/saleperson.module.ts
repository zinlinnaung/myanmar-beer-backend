import { Module } from '@nestjs/common';
import { SalepersonService } from './saleperson.service';
import { SalepersonController } from './saleperson.controller';

@Module({
  controllers: [SalepersonController],
  providers: [SalepersonService],
  exports: [SalepersonService],
})
export class SalepersonModule {}
