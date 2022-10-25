import { DataSource } from 'typeorm';
import { CoffeeRefactor1666685133467 } from './src/migrations/1666685133467-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1666685662802 } from './src/migrations/1666685662802-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1666685133467, SchemaSync1666685662802],
});
