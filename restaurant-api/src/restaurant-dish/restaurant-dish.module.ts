import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Dish } from '../dish/dish.entity';
import { RestaurantDishService } from './restaurant-dish.service';
import { RestaurantDishController } from './restaurant-dish.controller';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { DishModule } from '../dish/dish.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant, Dish]),
    RestaurantModule,
    DishModule,
  ],
  providers: [RestaurantDishService],
  controllers: [RestaurantDishController],
})
export class RestaurantDishModule {}
