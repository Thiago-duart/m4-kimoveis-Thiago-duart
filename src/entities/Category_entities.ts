import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate_entities";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45, unique: true, nullable: false })
  name: string;
  @OneToMany((type) => RealEstate, (Category) => Category)
  realEstates: RealEstate;
}
