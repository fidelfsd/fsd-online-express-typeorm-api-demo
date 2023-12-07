import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column({ unique: true })
   username!: string;

   @Column()
   first_name!: string;

   @Column()
   last_name!: string;

   @Column({ unique: true })
   email!: string;
}
