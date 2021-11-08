import { IsNotEmpty, IsString } from "class-validator";

export class CreateAssociateDto {
    @IsNotEmpty()
    @IsString()
    Nome: string;
    @IsNotEmpty()
    @IsString()
    Cargo: string;
    @IsNotEmpty()
    @IsString()
    Admissão: string;
    Ativo: boolean;
}
