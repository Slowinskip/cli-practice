import { IsInt, IsNotEmpty, Length, IsString, Min } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  client: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  @Length(1, 200)
  address: string;
}
