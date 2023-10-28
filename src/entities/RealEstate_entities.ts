import { Address } from "./Address_entities";
import { Category } from "./Category_entities";
import { Schedule } from "./Schedule_entities";
import {
  Column,
  CreateDateColumn,
  Decimal128,
  DeepPartial,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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
  value: Number;
  @Column({ nullable: false })
  size: number;
  @OneToMany((type) => Schedule, (RealEstate) => RealEstate)
  schedules: Schedule[];
  @CreateDateColumn({ nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ nullable: false })
  updatedAt: Date;
  @OneToOne((type) => Address, (RealEstate) => RealEstate)
  @JoinColumn()
  addressId: Address;
  @ManyToOne((type) => Category, (RealEstate) => RealEstate)
  @JoinColumn([{ name: "categoryId" }])
  categoryId: Category[];
}
