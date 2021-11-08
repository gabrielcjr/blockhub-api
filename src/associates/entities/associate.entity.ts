import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
