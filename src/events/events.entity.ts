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

  //hora do evento(programação)
  @Column('varchar')
  eventTime: string;

  //data do início do Evento
  @Column('date')
  eventDate: Date;

  // data do final do evento
  @Column('date')
  eventDateEnd: Date;

  //hora do início do evento
  @Column('varchar')
  startTime: string;

  // hora do fim do evento
  @Column('varchar')
  endTime: string;

  @Column('varchar')
  eventDescription: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  speakerDescription: string;

  @Column('varchar')
  sponsor: string;

  @Column('varchar')
  supporters: string;

  @Column('varchar')
  exhibitors: string;

  @Column('varchar')
  auditoriumName: string;

  @Column('varchar')
  auditoriumDescription: string;

  @Column({
    type: 'enum',
    enum: EventType,
    default: EventType.NACIONAL,
  })
  eventType: EventType;
}
