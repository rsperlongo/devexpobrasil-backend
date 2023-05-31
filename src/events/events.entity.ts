import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum EventType {
  NACIONAL = 'nacional',
  REGIONAL = 'regional',
}

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

  @Column({
    type: 'enum',
    enum: EventType,
    default: EventType.NACIONAL,
  })
  eventType: EventType;
}
