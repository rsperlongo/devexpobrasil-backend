import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SponsorsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sponsorName: string;
}
