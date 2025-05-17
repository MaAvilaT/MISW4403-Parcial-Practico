import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Dish } from '../dish/dish.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  cuisineType: string;

  @Column()
  website: string;

  @ManyToMany(() => Dish, dish => dish.restaurants)
  @JoinTable()
  dishes: Dish[];
}
