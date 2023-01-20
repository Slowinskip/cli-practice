import { IsInt, IsNotEmpty, Length, IsString, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  client: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  productId: string;

  @IsNotEmpty()
  @Length(1, 200)
  address: string;
}
