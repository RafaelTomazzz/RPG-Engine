import { deletePersonagem } from "../../Model/personagemModel.js";

export default async function deletePersonagemController(req, res) {
    const { id } = req.params

    const personagem = {id: +id}
    const result = await deletePersonagem(+id)

    return res.json({
        message: "personagem deletado com sucesso",
        personagem: result
    })
    
}