import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProjectsTable1636136667646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        IsNull: true,
                        unique: true,
                        
                    },
                    {
                        name: 'Nome',
                        type: 'varchar',
                    },
                    {
                        name: 'Descrição',  
                        type: 'varchar',
                    },
                    {
                        name: 'Início',  
                        notNull: true,
                        type: 'varchar',
                    },
                    {
                        name: 'Fim',  
                        type: 'varchar',
                    },
                    {
                        name: 'Ativo',  
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
