import { createPersonagemArma } from "../../Model/personagemarmaModel.js";

export default async function (req, res){

    const personagemarma = req.body

    const result = await createPersonagemArma(personagemarma)

    if(result){
        return res.status(500).json({
            message: "Erro ao criar o PersonagemArma!"
        })
    }

    return res.status(200).json({
        message: "PersonagemArma criado com sucesso"
    })
}