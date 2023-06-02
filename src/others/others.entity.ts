import { EventsEntity } from 'src/events/events.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exhibitors')
export class OthersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  exhibitorsName: string;

  @OneToMany(() => EventsEntity, (events) => events.exhibitorsName)
  events: EventsEntity[];
}
