import { EventsEntity } from 'src/events/events.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('supporters')
export class SupportersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  supportersName: string;

  @OneToMany(() => EventsEntity, (events) => events.supporters)
  events: EventsEntity[];
}
