import { getbyidPersonagem } from "../../Model/personagemModel.js";

export default async function getPersonagemController(req, res) 
{
    const { id } = req.params

    const personagem = {id: +id}
    const result = await getbyidPersonagem(+id)

    return res.json({
        message: "personagem encontrado!",
        personagem: result
    })
}