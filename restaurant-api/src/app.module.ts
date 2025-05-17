import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { DishModule } from './dish/dish.module';
import { RestaurantDishModule } from './restaurant-dish/restaurant-dish.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'restaurant.db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RestaurantModule,
    DishModule,
    RestaurantDishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
