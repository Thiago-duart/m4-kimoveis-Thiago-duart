import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate_entities";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45, unique: true, nullable: false })
  name: string;
  @ManyToOne((type) => RealEstate, (Category) => Category)
  realEstates: RealEstate;
}
