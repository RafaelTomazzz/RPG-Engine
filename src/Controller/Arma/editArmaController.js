import { updateArma, armaValidator } from "../../Model/armaModel.js"

export default async function editArmaController(req, res) {

    const { id } = req.params

    const arma = req.body
    const { success, error, data } = armaValidator(arma, {id: true, descricao: true, ataque: true, estamina: true})
            
    if(!success){
        return res.status(400).json({
        message: "Erro ao validar os dados da arma!",
        errors: error.flatten().fieldErrors
        })
    }

    const result = await updateArma(+id, arma)

    if(!result){
        return res.status(200).json({
            message: "Arma atualizada com sucesso.",
            arma: result
        })
    }
    
}