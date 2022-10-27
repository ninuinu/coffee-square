import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JoinTable } from 'typeorm';
import { Flavor } from './flavor.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Coffee {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @ApiProperty()
  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors: Flavor[];
}
