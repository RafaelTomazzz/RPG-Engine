import { PrismaClient } from "@prisma/client"
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        invalid_type_error: "O id deve ser um valor numérico.",
        required_error: "O id é obrigatório."
    }),

    nome: z.string({
        invalid_type_error: "O nome deve ser uma string.",
        required_error: "O nome é obrigatório."
    })
    .min(1, "O nome deve ter no mínimo um caracter")
    .max(30, "O nome pode ter no máximo 30 caracteres"),

    descricao: z.string({
        invalid_type_error: "A descrição deve ser uma string",
        required_error: "A descrição é obrigatória."
    })
    .min(1, "A descrição deve ter no mínimo um caracter")
    .max(255, "A descrição pode ter no máximo 255 caracteres"),

    vida: z.number({
            invalid_type_error: "A vida deve ser um valor numérico.",
            required_error: "A vida é obrigatório."
        })
        .min(10, "O personagem deve ter no mínimo 10 de vida")
        .max(100, "O personagem deve ter no máximo 100 de vida"),

    defesa: z.number({
            invalid_type_error: "A defesa deve ser um valor numérico.",
            required_error: "A defesa é obrigatório."
        })
        .min(10, "O personagem deve ter no mínimo 10 de defesa")
        .max(100, "O personagem deve ter no máximo 100 de defesa"),
    
    estamina: z.number({
        invalid_type_error: "A estamina deve ser um valor numérico.",
        required_error: "A estamina é obrigatório."
    })
    .min(10, "O personagem deve ter no mínimo 10 de estamina")
    .max(100, "O personagem deve ter no máximo 100 de estamina"),
    
    velocidade: z.number({
        invalid_type_error: "A velocidade deve ser um valor numérico.",
        required_error: "A velocidade é obrigatório."
    })
    .min(10, "O personagem deve ter no mínimo 10 de velocidade")
    .max(100, "O personagem deve ter no máximo 100 de velocidade"),

    critico: z.number({
        invalid_type_error: "O critico deve ser um valor numérico.",
        required_error: "O critico é obrigatório."
    })
    .min(10, "O personagem deve ter no mínimo 10 de critico")
    .max(100, "O personagem deve ter no máximo 100 de critico"),
})

export async function createPersonagem(personagem){
    const result = await prisma.personagem.create({
        data: personagem,
        select:{
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })
    return result
}

export async function getallPersonagem()
{
    const result = await prisma.personagem.findMany({
        select:{
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })
    return result
}

export async function getbyidPersonagem(id)
{
    const result = await prisma.personagem.findUnique({
        where: {
            id: id 
        },
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })

    return result
}

export async function deletePersonagem(id) {
    const result = await prisma.personagem.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })

    return result
}

export async function updatePersonagem(id, personagem) {
    const result = await prisma.personagem.update({
        where: {
            id: id
        },
        data: personagem,
        select: {
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })

    return result
}

export async function updateNomePersonagem(id, nome) {
    const result = await prisma.personagem.update({
        where: {
            id: id
        },
        data: {
            nome: nome
        },
        select: {
            nome: true,
            descricao: true,
            ataque: true,
            defesa: true,
            estamina: true,
            velocidade: true,
            critico: true
        }
    })
    
}