import { updateNomePersonagem } from "../../Model/personagemModel.js";

export default async function editPersonagemController(req, res) {
    const { id } = req.params

    const personagem = {id: +id}
    const result = await updateNomePersonagem(+id, req.body)

    return res.json({
        message: "Nome alterado com sucesso",
        personagem: result
    })
    
}