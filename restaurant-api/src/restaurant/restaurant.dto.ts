import { IsString, IsNotEmpty, IsUrl, IsIn } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([
    'Italian',
    'Japanese',
    'Mexican',
    'Colombian',
    'Indian',
    'International',
  ])
  readonly cuisineType: string;

  @IsUrl()
  @IsNotEmpty()
  readonly website: string;
}

export class UpdateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  @IsString()
  @IsNotEmpty()
  readonly address?: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([
    'Italian',
    'Japanese',
    'Mexican',
    'Colombian',
    'Indian',
    'International',
  ])
  readonly cuisineType?: string;

  @IsUrl()
  @IsNotEmpty()
  readonly website?: string;
}
