import { Schedule } from "./Schedule_entities";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45, nullable: false })
  name: string;
  @Column({ length: 45, unique: true, nullable: false })
  email: string;
  @Column({ nullable: false, default: false })
  admin: boolean;
  @Column({ length: 120, nullable: false })
  password: string;

  @OneToMany((type) => Schedule, (User) => User)
  schedules: Schedule;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
  @DeleteDateColumn({ type: `timestamp`, nullable: true })
  deletedAt: Date;
}
