import { RealEstate } from "./RealEstate_entities";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 45, nullable: false })
  street: string;
  @Column({ length: 8, nullable: false })
  zipCode: string;
  @Column({ nullable: false })
  number: number;
  @Column({ length: 20, nullable: false })
  city: string;
  @Column({ length: 2, nullable: false })
  state: string;
  @OneToOne((type) => RealEstate, (Address) => Address)
  realEstates: RealEstate;
}
