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
  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    nullable: false,
    default: 0,
  })
  value: Number;
  @Column({ nullable: false })
  size: number;
  @OneToMany((type) => Schedule, (RealEstate) => RealEstate.realEstate)
  schedules: Schedule[];
  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;
  @OneToOne((type) => Address, (RealEstate) => RealEstate.realEstates)
  @JoinColumn()
  address: Address;
  @ManyToOne((type) => Category, (RealEstate) => RealEstate.realEstates)
  @JoinColumn([{ name: "category" }])
  category: Category;
}
