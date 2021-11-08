import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'projects'}) 
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    Nome: string;

    @Column()
    Descrição: string;

    @Column()
    Início: string;

    @Column()
    Fim: string;

    @Column()
    Ativo: boolean;
}