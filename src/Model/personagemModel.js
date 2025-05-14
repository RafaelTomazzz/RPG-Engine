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
}