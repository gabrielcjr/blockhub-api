import { Associate } from "src/associates/entities/associate.entity";
import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "executions" })
export class Execution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ProjetoId: number;

    @OneToOne(() => Project)
    Project: Project

    @Column()
    @ManyToOne(() => Associate)
    ColaboradorId: number;

    @Column()
    Inicio: Date;

    @Column()
    Fim: Date;

    @Column()
    Ativo: boolean;

    
}
