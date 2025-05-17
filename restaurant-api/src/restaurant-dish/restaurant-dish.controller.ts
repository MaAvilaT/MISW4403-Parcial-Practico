import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { RestaurantDishService } from './restaurant-dish.service';
import { Dish } from '../dish/dish.entity';
import { Restaurant } from '../restaurant/restaurant.entity';
import {
  AddDishToRestaurantDto,
  UpdateDishesFromRestaurantDto,
  CreateDishForRestaurantDto,
} from './restaurant-dish.dto';

@Controller('restaurants/:restaurantId/dishes')
export class RestaurantDishController {
  constructor(private readonly restaurantDishService: RestaurantDishService) {}

  @Post()
  async addDishToRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
    @Body() addDishDto: AddDishToRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantDishService.addDishToRestaurant(
      restaurantId,
      addDishDto.dishId,
    );
  }

  @Get()
  async findDishesFromRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
  ): Promise<Dish[]> {
    return this.restaurantDishService.findDishesFromRestaurant(restaurantId);
  }

  @Get(':dishId')
  async findDishFromRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
    @Param('dishId', ParseIntPipe) dishId: number,
  ): Promise<Dish> {
    return this.restaurantDishService.findDishFromRestaurant(
      restaurantId,
      dishId,
    );
  }

  @Put()
  async updateDishesFromRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
    @Body() updateDishesDto: UpdateDishesFromRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantDishService.updateDishesFromRestaurant(
      restaurantId,
      updateDishesDto.dishIds,
    );
  }

  @Delete(':dishId')
  async deleteDishFromRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
    @Param('dishId', ParseIntPipe) dishId: number,
  ): Promise<Restaurant> {
    return this.restaurantDishService.deleteDishFromRestaurant(
      restaurantId,
      dishId,
    );
  }

  @Post('new')
  async createDishForRestaurant(
    @Param('restaurantId', ParseIntPipe) restaurantId: number,
    @Body() createDishDto: CreateDishForRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantDishService.createDishForRestaurant(
      restaurantId,
      createDishDto.dish,
    );
  }
}
