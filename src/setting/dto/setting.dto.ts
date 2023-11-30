import { IsString } from 'class-validator';

export class SettingDto {
  @IsString()
  settitle: string;

  @IsString()
  setvalue: string;
}
