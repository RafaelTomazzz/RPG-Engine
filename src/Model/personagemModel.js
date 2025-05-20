import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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