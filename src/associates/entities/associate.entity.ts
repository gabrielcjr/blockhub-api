import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity({ name: 'associates'}) 
export class Associate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nome: string;

    @Column()
    Cargo: string;

    @Column()
    Admissão: string;

    @Column()
    Ativo: boolean;


}
