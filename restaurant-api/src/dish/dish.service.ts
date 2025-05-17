import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';
import { CreateDishDto, UpdateDishDto } from './dish.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async findAll(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['restaurants'] });
  }

  async findOne(id: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({ 
      where: { id },
      relations: ['restaurants']
    });
    
    if (!dish) {
      throw new NotFoundException(`Dish with ID ${id} not found`);
    }
    
    return dish;
  }

  async create(createDishDto: CreateDishDto): Promise<Dish> {
    const dish = this.dishRepository.create(createDishDto);
    return this.dishRepository.save(dish);
  }

  async update(id: number, updateDishDto: UpdateDishDto): Promise<Dish> {
    const dish = await this.findOne(id);
    
    this.dishRepository.merge(dish, updateDishDto);
    return this.dishRepository.save(dish);
  }

  async delete(id: number): Promise<void> {
    const dish = await this.findOne(id);
    
    await this.dishRepository.remove(dish);
  }
}
