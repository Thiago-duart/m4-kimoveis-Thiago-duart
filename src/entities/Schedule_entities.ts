import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User_entities";
import { RealEstate } from "./RealEstate_entities";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "date", nullable: false })
  date: Date;
  @Column({ nullable: false })
  hour: string;
  @ManyToOne((type) => RealEstate, (Schedule) => Schedule.schedules)
  @JoinColumn()
  realEstate: RealEstate;
  @ManyToOne((type) => User, (Schedule) => Schedule.schedules)
  user: User;
}
