import { Schedule } from "./Schedule_entities";
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { hash } from "bcryptjs";

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
  @Column()
  password: string;
  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 8);
  }
  @OneToMany((type) => Schedule, (User) => User.user)
  schedules: Schedule[];
  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;
  @DeleteDateColumn({ type: `text`, nullable: true })
  deletedAt: Date;
}
