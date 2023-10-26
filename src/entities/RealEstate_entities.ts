import { Address } from "./Address_entities";
import { Category } from "./Category_entities";
import { Schedule } from "./Schedule_entities";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("realEstates")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: false, default: false })
  sold: boolean;
  @Column({ nullable: false, default: 0 })
  value: number;
  @Column({ nullable: false })
  size: number;
  @OneToMany((type) => Schedule, (RealEstate) => RealEstate)
  schedules: Schedule;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
  @OneToOne((type) => Address, (RealEstate) => RealEstate)
  @JoinColumn()
  addressId: Address;
  @OneToMany((type) => Category, (RealEstate) => RealEstate)
  categoryId: Category[];
}
