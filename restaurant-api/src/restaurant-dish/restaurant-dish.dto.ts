import {
  IsArray,
  IsNumber,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDishDto } from '../dish/dish.dto';

export class AddDishToRestaurantDto {
  @IsNumber()
  dishId: number;
}

export class UpdateDishesFromRestaurantDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  dishIds: number[];
}

export class CreateDishForRestaurantDto {
  @ValidateNested()
  @Type(() => CreateDishDto)
  dish: CreateDishDto;
}
