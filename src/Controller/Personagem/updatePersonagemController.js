import { updatePersonagem } from "../../Model/personagemModel.js";

export default async function updatePersonagemController(req, res) {
    const { id } = req.params
    
    const personagem = req.body
    const { success, error, data } = personagemValidator(personagem)
    
    if(!success){
        return res.status(400).json({
        message: "Erro ao validar os dados do personagem!",
        errors: error.flatten().fieldErrors
        })
    }

    const result = await updatePersonagem(+id, personagem)

    if(!result){
        return res.status(500).json({
            message: "Erro ao alterar o personagem!"
        })
    }

    return res.json({
        message: "Personagem alterado com sucesso!",
        personagem: result
    })
}