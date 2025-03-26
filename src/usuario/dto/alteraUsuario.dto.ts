import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength,IsOptional } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Erik Gazeta',
        description: 'deve ser enviado o nome do usuário'
    })    
    nome:string;
    
    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
        example: '29',
        description: 'deve ser enviado a idade do usuário em número'
    })
    idade: Number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Bauru',
        description: 'deve ser enviado o nome da cidade do usuário'
    })
    cidade: string;

    @IsEmail(undefined,{message:"email é inválido"})    
    @EmailUnico({message:"email já cadastrado. Tente novamente"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'erikgazetagois@hotmail.com',
        description: 'esse campo sera o login do usuario e deve conter um email válido'
    })
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '14996858619',
        description: 'esse é o campo de contato do usuario, deve ser enviado um número de telefone'
    })
    telefone: string;

    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Senha@123456',
        description: 'A senha deve ter numeros, letras maiusculas, letras minusculas e caracteres especiais'
    })
    senha: string; 
}