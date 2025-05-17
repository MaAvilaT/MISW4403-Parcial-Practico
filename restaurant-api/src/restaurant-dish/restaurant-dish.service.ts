import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';
import { Dish } from '../dish/dish.entity';
import { RestaurantService } from '../restaurant/restaurant.service';
import { DishService } from '../dish/dish.service';
import { CreateDishDto } from '../dish/dish.dto';

@Injectable()
export class RestaurantDishService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    private restaurantService: RestaurantService,
    private dishService: DishService,
  ) {}

  async addDishToRestaurant(restaurantId: number, dishId: number): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    const dish = await this.dishService.findOne(dishId);
    
    if (!restaurant.dishes) {
      restaurant.dishes = [];
    }
    
    restaurant.dishes.push(dish);
    return this.restaurantRepository.save(restaurant);
  }

  async findDishesFromRestaurant(restaurantId: number): Promise<Dish[]> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    return restaurant.dishes;
  }

  async findDishFromRestaurant(restaurantId: number, dishId: number): Promise<Dish> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    const dish = restaurant.dishes.find(d => d.id === dishId);
    
    if (!dish) {
      throw new NotFoundException(`Dish with ID ${dishId} not found in restaurant with ID ${restaurantId}`);
    }
    
    return dish;
  }

  async updateDishesFromRestaurant(restaurantId: number, dishIds: number[]): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    const dishes = await Promise.all(
      dishIds.map(id => this.dishService.findOne(id)),
    );
    
    restaurant.dishes = dishes;
    return this.restaurantRepository.save(restaurant);
  }

  async deleteDishFromRestaurant(restaurantId: number, dishId: number): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    restaurant.dishes = restaurant.dishes.filter(dish => dish.id !== dishId);
    
    return this.restaurantRepository.save(restaurant);
  }

  async createDishForRestaurant(restaurantId: number, createDishDto: CreateDishDto): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOne(restaurantId);
    const newDish = await this.dishService.create(createDishDto);
    
    if (!restaurant.dishes) {
      restaurant.dishes = [];
    }
    
    restaurant.dishes.push(newDish);
    return this.restaurantRepository.save(restaurant);
  }
}
