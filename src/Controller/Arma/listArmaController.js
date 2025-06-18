import { getallArma } from "../../Model/armaModel.js"

export default async function listArmaController(req, res) {

    const result = await getallArma()

    if(!result){
        return res.status(400).json({
            message: "Não foi possível restornar as armas"
        })
    }

    return res.json(result)
    
}