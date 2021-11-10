import { Execution } from "src/executions/entities/execution.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";

@Entity({ name: 'projects'}) 
export class Project {
    @PrimaryGeneratedColumn()
    @OneToMany(type => Execution, Execution => Execution.ProjetoId)
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