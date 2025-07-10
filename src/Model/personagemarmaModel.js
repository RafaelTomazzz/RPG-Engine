import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function createPersonagemArma(personagemarma){
    const result = await prisma.personagemarma.create({
        data: personagemarma,
        select: {
            idPersonagem,
            idArma
        }
    })

    return result
}

export async function listPersonagemArma(){
    const result = await prisma.personagemarma.findMany({
        select: {
            idPersonagem,
            idArma
        }
    })

    return result
}

export async function getPersonagemArma(idArma, idPersonagem) {
    const result = await prisma.personagemarma.findUnique({
        where: {
            idPersonagem: idPersonagem,
            idArma: idArma
        },
        select: {
            idPersonagem,
            idArma
        }
    })
}

export async function deletePersonagemArma(idArma, idPersonagem){
    const result = await prisma.personagemarma.delete({
        where: { 
            idArma: idArma,
            idPersonagem: idPersonagem,
        }, 
        select: {
            idPersonagem,
            idArma
        }
    })

    return result
}