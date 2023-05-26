import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar')
export class CalendarEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  date: string;

  @Column('varchar')
  datetime: string;

  @Column('varchar', { length: 250 })
  eventDescription: string;

  @Column('varchar', { length: 250 })
  speakerDescription: string;

  @Column('varchar')
  type: string;
}
