import { deleteArma, armaValidator } from "../../Model/armaModel.js"

export default async function deleteArmaController(req, res) {
    const { id } = req.params

    const arma = {id: +id}
    const { success, error, data } = armaValidator(arma, {nome: true, descricao: true, ataque: true, estamina: true})
    
    if(!success){
        return res.status(400).json({
        message: "Erro ao validar os dados da arma!",
        errors: error.flatten().fieldErrors
        })
    }

    const result = await deleteArma(+id)

    if(!result){
        return res.status(500).json({
            message: "Não foi possível deletar a arma!"
        })
    }

    return res.status(200).json({
        message: "Personagem deletado com sucesso",
        arma: result
    })
    
}