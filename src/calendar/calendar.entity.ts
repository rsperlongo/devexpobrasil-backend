import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TypeEnum {
  PALESTRA = 'Palestra',
  DEBATE = 'Debate',
}

@Entity()
export class CalendarEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  date: string;

  @Column('time')
  datetime: Date;

  @Column('varchar', { length: 250 })
  eventDescription: string;

  @Column('varchar', { length: 250 })
  speakerDescription: string;

  @Column({
    type: 'enum',
    enum: TypeEnum,
  })
  type: TypeEnum;
}
