import { IsString, IsNotEmpty, IsNumber, Min, IsIn } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['starter', 'main course', 'dessert', 'beverage'])
  readonly category: string;
}

export class UpdateDishDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  @IsString()
  @IsNotEmpty()
  readonly description?: string;

  @IsNumber()
  @Min(0)
  readonly price?: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['starter', 'main course', 'dessert', 'beverage'])
  readonly category?: string;
}
