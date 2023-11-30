import { IsString } from 'class-validator';

export class SalepersonDto {
  @IsString()
  spfullname: string;

  @IsString()
  spmobile: string;

  @IsString()
  spstatus: string;
}
