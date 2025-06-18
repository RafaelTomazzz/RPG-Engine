import { createPersonagem, personagemValidator } from '../../Model/personagemModel.js'

export default async function (req, res)
{
    const personagem = req.body

    const { success, error, data } = personagemValidator(personagem, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro ao validar os dados do personagem!",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await createPersonagem(personagem)

    if(!result){
        return res.status(500).json({
            message: "Erro ao criar o personagem!"
        })
    }

    return res.status(200).json({
        message: "personagem criado com sucesso"
    })
}
