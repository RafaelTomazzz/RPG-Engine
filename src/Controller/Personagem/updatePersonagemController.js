import { updatePersonagem } from "../../Model/personagemModel.js";

export default async function updatePersonagemController(req, res) {
    const { id } = req.params
    
    const personagem = req.body
    const result = await updatePersonagem(+id, personagem)

    return res.json({
        message: "Personagem alterado com sucesso!",
        personagem: result
    })
}