import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, SaveOptions } from "typeorm";

@Entity()
export class attractions extends BaseEntity {
    @PrimaryColumn({ type: "int" })
    id!: number;

    @Column({ type: "varchar", length: 30 })
    name!: string;

    @Column({ type: "varchar", length: 50 })
    coordinates!: string;

    @Column({ type: "varchar", length: 500 })
    description!: string;

    @Column({ type: "varchar", length: 240 })
    image_url!: string;

    @Column({ type: "varchar", length: 60 })
    en_name!: string;

}