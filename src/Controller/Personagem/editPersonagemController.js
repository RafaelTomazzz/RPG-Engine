import { updateNomePersonagem, personagemValidator } from "../../Model/personagemModel.js";

export default async function editPersonagemController(req, res) {
    const { id } = req.params

    const personagem = {id: +id}
    const { success, error, data } = personagemValidator(personagem)
    
    if(!success){
        return res.status(400).json({
            message: "Erro ao validar os dados do personagem!",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await updateNomePersonagem(+id, req.body)

    if(!result){
        return res.status(500).json({
            message: "Erro ao deletar o personagem!"
        })
    }

    return res.json({
        message: "Nome alterado com sucesso",
        personagem: result
    })
    
}