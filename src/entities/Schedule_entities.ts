import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User_entities";
import { RealEstate } from "./RealEstate_entities";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: false })
  date: Date;
  @Column({ type: "time", nullable: false })
  hour: string;
  @ManyToOne((type) => RealEstate, (Schedule) => Schedule)
  realEstateId: RealEstate;
  @ManyToOne((type) => User, (Schedule) => Schedule)
  userId: User;
}
