import { PrismaClient } from "@prisma/client"
import { z } from 'zod'

const prisma = new PrismaClient()

const armaSchema = z.object({
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

    ataque: z.number({
        invalid_type_error: "A vida deve ser um valor numérico.",
        required_error: "A vida é obrigatório."
    })
    .min(5, "A arma deve ter no mínimo 5 de vida")
    .max(50, "A arma deve ter no máximo 100 de vida"),

    estamina: z.number({
        invalid_type_error: "A estamina deve ser um valor numérico.",
        required_error: "A estamina é obrigatório."
    })
    .min(5, "A arma deve ter no mínimo 5 de estamina")
    .max(50, "A arma deve ter no máximo 100 de estamina")
})

export const armaValidator = (arma, partial = null) => {
    if(partial) {
        return armaSchema.partial(partial).safeParse(arma)
    }
    return armaSchema.safeParse(arma)
}

export async function createArma(arma){
    const result = await prisma.arma.create({
        data: arma,
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })

    return result
}

export async function getallArma() {
    const result = await prisma.arma.findMany({
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })

    return result
}

export async function getbyidArma(id) {
    const result = await prisma.arma.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })

    return result
}

export async function deleteArma(id) {
    const result = await prisma.arma.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })

    return result
}

export async function updateArma(id, arma){
    const result = await prisma.arma.update({
        where: {
            id: id
        },
        data: arma,
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })

    return result
}

export async function updateNomeArma(id, nome) {
    const result = await prisma.arma.update({
        where: {
            id: id
        },
        data: {
            nome: nome
        },
        select: {
            id: true,
            nome: true,
            descricao: true,
            ataque: true,
            estamina: true,
            classe: true
        }
    })
    
    return result
}