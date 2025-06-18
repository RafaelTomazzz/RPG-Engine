import { createArma, armaValidator } from "../../Model/armaModel.js"

export default async function (req, res)
{
    const arma = req.body

    const { success, error, data } = armaValidator(arma, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Nao foi possível validar a arma",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await createArma(arma)

    if(!result){
        return res.status(500).json({
            message: "Não foi possível criar a arma!"
        })
    }

    return res.status(200).json({
        message: "Arma criada com sucesso!",
    })
}