import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { LogsModule } from './log/logs.module';
import { OutletModule } from './outlet/outlet.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards/at.guard';
import { SalepersonModule } from './saleperson/saleperson.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AuthenticationModule,
    SalepersonModule,
    SettingModule,
    CustomerModule,
    LogsModule,
    OutletModule,
    CustomerModule,
    LogsModule,
    OutletModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
