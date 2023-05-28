import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  uf: string;

  @Column('varchar')
  locale: string;

  @Column('varchar')
  address: string;

  @Column('date')
  eventDate: Date;

  @Column('varchar')
  description: string;
}
