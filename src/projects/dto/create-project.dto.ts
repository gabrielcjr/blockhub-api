import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    Nome: string;
    Descrição: string;
    @IsNotEmpty()
    @IsString()
    Início: string;
    Fim: string;
    Ativo: boolean;
}
