import { CalendarEntity } from 'src/calendar/calendar.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('speakers')
export class SpeakersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  role: string;

  @ManyToMany(() => CalendarEntity)
  @JoinTable()
  speakerDescription: CalendarEntity[];
}
