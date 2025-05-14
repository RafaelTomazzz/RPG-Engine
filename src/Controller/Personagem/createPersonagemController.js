import { createPersonagem } from '../../Model/personagemModel.js'

export default async function (req, res)
{
    const user = req.body
    const result = await createPersonagem(user)
    return res.status(200).json({
        message: "personagem criado com sucesso"
    })
}
