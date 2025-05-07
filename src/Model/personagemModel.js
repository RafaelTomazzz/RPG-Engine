import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export async function createPersonagem(personagem){
    const result = await prisma.personatem.create({
        data: personagem,
    })
}