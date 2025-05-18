import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  category: string;

  @ManyToMany(() => Restaurant, (restaurant) => restaurant.dishes)
  restaurants: Restaurant[];
}
