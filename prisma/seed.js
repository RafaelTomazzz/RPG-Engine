import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    await prisma.personagem.createMany({
        data: [
            { nome: "Rafael", descricao: "Rapaz bonito e inteligente", vida: 50, ataque: 50, defesa: 50, estamina: 50, velocidade: 50, critico: 50, classe: "Guerreiro"},
            { nome: "Iris", descricao: "A mulher mais charmoza do mundo", vida: 50, ataque: 50, defesa: 50, estamina: 50, velocidade: 50, critico: 50, classe: "Mago" },
            { nome: "Memphis Depay", descricao: "O holandês voador. Um guerreiro audacioso e cheio de estilo próprio", vida: 80, ataque: 80, defesa: 75, estamina: 40, velocidade: 30, critico: 50, classe: "Guerreiro" },
            { nome: "Renato Augusto", descricao: "É um estrategista nato, um verdadeiro maestro no campo de batalha.", vida: 50, ataque: 60, defesa: 60, estamina: 40, velocidade: 50, critico: 80, classe: "Arqueiro" },
            { nome: "Ronaldo Fenômeno", descricao: "Uma lenda viva, conhecido por sua velocidade fulminante e força esmagadora.", vida: 100, ataque: 100, defesa: 100, estamina: 100, velocidade: 100, critico: 100, classe: "Assassino" },
            { nome: "Djavan", descricao: "Djavan é um samurai cuja lâmina dança ao ritmo da alma", vida: 40, ataque: 90, defesa: 20, estamina: 70, velocidade: 90, critico: 50, classe: "Samurai" }
            
        ]
    })

    await prisma.arma.createMany({
        data: [
            { nome: "Espada da Aurora Sangrenta", descricao: "Forjada no calor do primeiro sol de um eclipse, sua lâmina avermelhada parece brilhar com o nascer do dia.", ataque: 25, estamina: 25, classe: "Guerreiro"},
            { nome: "Cajado arcano", descricao: "Um cajado feito de madeira ancestral com veios prateados. Quando balançado", ataque: 15, estamina: 5, classe: "Mago"},
            { nome: "Arco longo elfico", descricao: "Leve e silencioso, este arco feito de madeira viva se camufla com o ambiente", ataque: 10, estamina: 10, classe: "Arqueiro"},
            { nome: "Adagas Gêmeas", descricao: "Leve e silencioso, este arco feito de madeira viva se camufla com o ambiente", ataque: 30, estamina: 40, classe: "Assassino"},
            { nome: "Machado de Guerra", descricao: "Um machado robusto com entalhes tribais, forjado por uma tribo extinta de bárbaros.", ataque: 40, estamina: 50, classe: "Guerreiro"}

        ]
    })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })